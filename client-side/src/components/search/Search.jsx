import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Formik, Field, Form } from "formik";
import qs from "qs";
import { getAllLocation } from "../../_api/LocationApi";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
  faCalendarDays,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";

export default function Search() {
  // React Hooks
  const navigate = useNavigate();
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [guestsInput, setGuestsInput] = useState(1);
  const location = useLocation();
  const [routeName, setRouteName] = useState("/");

  useEffect(() => {
    setRouteName(location.pathname);
  }, [location]);

  // Function to fetch all locations
  const fetchLocation = async () => {
    const response = await getAllLocation();
    setLocations(response.data);
  };
  useEffect(() => {
    fetchLocation();
  }, []);

  // Datepicker
  const initialValues = {
    destination: "",
    checkInDate: new Date(),
    guests: 1,
  };

  const handleSubmit = async (values) => {
    const { checkInDate } = values;
    const checkInDateMoment = moment(checkInDate).format("YYYY-MM-DD");

    // Client Side Validation
    if (!selectedLocation) {
      toast.info("Please Select A Location");
      return;
    }
    const guestsNumber = Number(guestsInput);
    if (isNaN(guestsNumber)) {
      toast.info("Please Input Guest Number!");
      return;
    }
    if (guestsNumber <= 0) {
      toast.info("Please Input Guest Number!");
      return;
    }

    // Formatting data
    const query = {
      location: selectedLocation,
      startDate: checkInDateMoment,
      guests: guestsInput,
    };

    // Filtering url
    const filter = /^\/$/;
    const isLandingPage = filter.test(routeName);

    // Navigate to 'hotel' Page
    if (isLandingPage) {
      navigate(`hotels?${qs.stringify(query)}`);
      return;
    }
    window.location.replace(`hotels?${qs.stringify(query)}`);
  };

  // Handler for Select / Input Change
  const handleChange = (e) => {
    const { name, value } = e.target || {};
    if (name === "guests") setGuestsInput(value);
    if (name === "selectLocation") setSelectedLocation(value);
  };

  return (
    <div className="form-box site-form">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="row clearfix">
            <div className="form-group col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="field-label">Destination</div>
              <div className="field-inner">
                <Field
                  name="selectLocation"
                  as="select"
                  value={selectedLocation}
                  onChange={handleChange}
                  className="field-select"
                >
                  <option value="" disabled>
                    Select a location
                  </option>
                  {locations.map((place) => (
                    <option key={place._id} value={place.location_name}>
                      {place.location_name}
                    </option>
                  ))}
                </Field>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="alt-icon"
                  fixedWidth
                />
              </div>
            </div>
            <div className="form-group col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="field-label">Check In</div>
              <div className="field-inner customDatePickerWidth">
                <Field name="checkInDate">
                  {({ field, form }) => (
                    <DatePicker
                      id="checkInDate"
                      wrapperClassName="datepicker"
                      selected={field.value}
                      onChange={(date) => form.setFieldValue(field.name, date)}
                      minDate={new Date()}
                    />
                  )}
                </Field>
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="alt-icon"
                  fixedWidth
                />
              </div>
            </div>
            <div className="form-group col-xl-2 col-lg-2 col-md-6 col-sm-12">
              <div className="field-label">Guests</div>
              <div className="field-inner customDatePickerWidth">
                <Field
                  type="text"
                  name="guests"
                  placeholder="Guests"
                  value={guestsInput}
                  onChange={handleChange}
                />
                <FontAwesomeIcon
                  icon={faUsers}
                  className="alt-icon"
                  fixedWidth
                />
              </div>
            </div>
            <div className="form-group col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div className="field-inner">
                <button type="submit" className="theme-btn f-btn">
                  <span className="mx-2">Search Hotel</span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
