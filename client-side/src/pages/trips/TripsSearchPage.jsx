import AppLayout from "../../components/applayout/AppLayout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import "react-datepicker/dist/react-datepicker.css";
import "./customDatePicker.css";

const TripsSearchPage = () => {
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationinfo, setSelectedLocationInfo] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [isDisabled, setDisabled] = useState(false);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("/locations"); // Replace with your API endpoint
      setLocations(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data
  useEffect(() => {
    fetchData();
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

    const startDateMoment = moment(startDate, "YYYY MM DD");
    const endDateMoment = moment(endDate, "YYYY MM DD");

    const duration = endDateMoment.diff(startDateMoment, "days") + 1; // +1 cause include the starting date

    try {
      navigate("/tripsdetails", {
        state: {
          duration,
          selectedLocationinfo,
        },
      });
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
        latitude: selectedLocationObj.latitude,
        longitude: selectedLocationObj.longitude,
      });
    }
    setSelectedLocation(selectedId);
  };

  return (
    <AppLayout>
      <section className="packages-three">
        <div className="search-one">
          <div className="auto-container">
            <div className="outer">
              <div className="search-title">
                <span>Search for your desired tour place</span>
              </div>
              <div className="form-box site-form">
                <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                  <Form>
                    <div className="row clearfix">
                      <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="field-label">Destination</div>
                        <div className="field-inner">
                          <Field name="selectLocation" as="select" value={selectedLocation} onChange={handleSelectChange} className="field-select">
                            <option value="" disabled>
                              Select a location
                            </option>
                            {locations.map((location) => (
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
                    <button type="submit" className="theme-btn f-btn" disabled={isDisabled}>
                      <span className="mx-2">Create</span>
                      <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AppLayout>
  );
};

export default TripsSearchPage;
