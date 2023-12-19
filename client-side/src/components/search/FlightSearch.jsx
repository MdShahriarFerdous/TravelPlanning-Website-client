import {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import {getAllLocation} from "../../_api/LocationApi";
import "./FlightSearch.css";
import FlightCard from "../flight/FlightCard.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarDays, faLocationDot} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../pages/trips/customDatePicker.css";
import moment from "moment/moment.js";

export default function FlightSearch() {
    // eslint-disable-next-line no-unused-vars
    const [locationData, setLocationData] = useState();
    const [searchData, setsetSearchData] = useState({
        source_destination_id: "",
        destination_id: "",
        journey_date: new Date(),
        total_travellers: 1,
        flight_class: "economy"
    });
    const [formData, setFormData] = useState({
        source_destination_id: "",
        destination_id: "",
        journey_date: new Date(),
        total_travellers: 1,
        flight_class: "economy"
    });

    const handleResetFormData = () => {
        setFormData({
            source_destination_id: "",
            destination_id: "",
            journey_date: new Date(),
            total_travellers: 1,
            flight_class: "economy",
        });
    };

    console.log("formData", formData)
    console.log("searchData", searchData)

    const fetchLocation = async () => {
        const response = await getAllLocation();
        setLocationData(response.data);
    };

    useEffect(() => {
        fetchLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (values) => {
        // Convert the Date object to a string in a desired format
        // const formattedDate = values.journey_date.toISOString().split('T')[0];
        const { journey_date, source_destination_id, destination_id, total_travellers, flight_class } = values;
        const formattedDate = moment(journey_date).format("YYYY-MM-DD");

        // Update form data with the formatted date
        setsetSearchData({
            source_destination_id,
            destination_id,
            total_travellers,
            flight_class,
            journey_date: formattedDate,
        });
    };

    return (
        <>
            <div className="form-box site-form">
                <Formik
                    initialValues={formData}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                >
                    <Form>
                        <div className="row clearfix">
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="field-label">From</div>
                                <div className="field-inner">
                                    <Field name="source_destination_id" as="select"  className="field-select">
                                        <option value="" disabled>
                                            Where from go?
                                        </option>
                                        {locationData &&
                                            locationData.map((location) => (
                                            <option key={location._id} value={location._id}>
                                                {location.location_name}
                                            </option>
                                        ))}
                                    </Field>
                                    <FontAwesomeIcon icon={faLocationDot} className="alt-icon" fixedWidth />
                                </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="field-label">To</div>
                                <div className="field-inner">
                                    <Field name="destination_id" as="select"  className="field-select">
                                        <option value="" disabled>
                                            Where to go?
                                        </option>
                                        {locationData &&
                                            locationData.map((location) => (
                                                <option key={location._id} value={location._id}>
                                                    {location.location_name}
                                                </option>
                                            ))}
                                    </Field>
                                    <FontAwesomeIcon icon={faLocationDot} className="alt-icon" fixedWidth />
                                </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="field-label">Journey Date</div>
                                <div className="field-inner customDatePickerWidth">
                                    <Field name="journey_date">
                                        {({ field, form }) => (
                                            <DatePicker
                                                id="startDate"
                                                selected={field.value}
                                                onChange={(date) => form.setFieldValue("journey_date", date)}
                                                wrapperClassName="datepicker"
                                            />
                                        )}
                                    </Field>
                                    <FontAwesomeIcon icon={faCalendarDays} className="alt-icon" fixedWidth />
                                </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="field-label">Traveler</div>
                                <div className="field-inner">
                                    <Field
                                        type="text"
                                        name="total_travellers"
                                        placeholder="Traveler"
                                        // required
                                    />
                                    <i className="alt-icon fa fa-user"></i>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="theme-btn f-btn">
                          <span>
                            Search <i className="fa-solid fa-search"></i>
                          </span>
                        </button>
                    </Form>
                </Formik>
            </div>
            <FlightCard formData={searchData} onResetFormData={handleResetFormData}/>
        </>
    );
}
