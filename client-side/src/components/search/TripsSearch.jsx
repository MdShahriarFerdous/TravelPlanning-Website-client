import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { getAllLocation } from "../../_api/LocationApi";
import tripsImg from "./2899719z_tripImg.png";
import "./TripsSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";
import "./customDatePicker.css";

const TripsSearch = () => {
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(""); // For select dropdown
  const [selectedLocationinfo, setSelectedLocationInfo] = useState({
    latitude: 0,
    longitude: 0,
  }); // For set & pass location info to next page

  const [disabled, setDisabled] = useState(false); // Disable button when submit

  // Fetch Location data
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
    startDate: new Date(),
    endDate: new Date(),
  };

  const handleSubmit = async (values) => {
    setDisabled(true);

    const { startDate, endDate } = values;

    const startDateMoment = moment(startDate);
    const endDateMoment = moment(endDate);

    const duration = endDateMoment.diff(startDateMoment, "days") + 1; // +1 cause include the starting date

    try {
      navigate("/tripsdetails", {
        state: {
          duration,
          selectedLocationinfo,
        },
      });
      setDisabled(false);
    } catch (e) {
      console.error(e.message);
    }
  };

  // Handler for select change
  const handleSelectChange = (event) => {
    let selectedId = event.target.value;
    const selectedLocationObj = locations.find((location) => location._id === selectedId);
    if (selectedLocationObj) {
      setSelectedLocationInfo({
        location_name: selectedLocationObj.location_name,
        latitude: selectedLocationObj.latitude,
        longitude: selectedLocationObj.longitude,
      });
    }
    setSelectedLocation(selectedId);
  };

  return (
    <>
      <div className="form-box site-form">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div className="row clearfix">
              <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="field-label">Destination</div>
                <div className="field-inner">
                  <Field name="selectLocation" as="select" value={selectedLocation} onChange={handleSelectChange} className="field-select" required={true}>
                    <option value="" disabled>
                      Select a location
                    </option>
                    {locations &&
                      locations.map((location) => (
                        <option key={location._id} value={location._id}>
                          {location.location_name}
                        </option>
                      ))}
                  </Field>
                  <FontAwesomeIcon icon={faLocationDot} className="alt-icon" fixedWidth />
                </div>
              </div>
              <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="field-label">Start Date</div>
                <div className="field-inner customDatePickerWidth">
                  <Field name="startDate">{({ field, form }) => <DatePicker id="startDate" wrapperClassName="datepicker" selected={field.value} onChange={(date) => form.setFieldValue(field.name, date)} minDate={new Date()} />}</Field>
                  <FontAwesomeIcon icon={faCalendarDays} className="alt-icon" fixedWidth />
                </div>
              </div>
              <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="field-label">End Date</div>
                <div className="field-inner customDatePickerWidth">
                  <Field name="endDate">{({ field, form }) => <DatePicker id="endDate" wrapperClassName="datepicker" selected={field.value} onChange={(date) => form.setFieldValue(field.name, date)} minDate={new Date()} />}</Field>
                  <FontAwesomeIcon icon={faCalendarDays} className="alt-icon" fixedWidth />
                </div>
              </div>
            </div>
            <button type="submit" className="theme-btn f-btn" disabled={disabled}>
              <span className="mx-2">Create</span>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>
        </Formik>
      </div>
      <div className="trips-img text-center">
        <img src={tripsImg} alt="" />
        <h4>Plan your next trip in a mintue</h4>
      </div>
    </>
  );
};

export default TripsSearch;
