import {useEffect, useState} from "react";
import {Formik, Form, Field} from "formik";
import {getAllLocation} from "../../_api/LocationApi";
import {TextField} from "@mui/material";
import "./FlightSearch.css";
import FlightCard from "../flight/FlightCard.jsx";

export default function FlightSearch() {
    // eslint-disable-next-line no-unused-vars
    const [locationData, setLocationData] = useState();
    const [formData, setFormData] = useState({
        source_destination_id: "",
        destination_id: "",
        journey_date: new Date().toISOString().split("T")[0],
        total_travellers: 1,
        flight_class: "economy"
    });

    const handleResetFormData = () => {
        setFormData({
            source_destination_id: "",
            destination_id: "",
            journey_date: new Date().toISOString().split("T")[0],
            total_travellers: 1,
            flight_class: "economy",
        });
    };

    const fetchLocation = async () => {
        const response = await getAllLocation();
        setLocationData(response.data);
    };

    useEffect(() => {
        fetchLocation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (values) => {
        // Update form data with the submitted values
        setFormData(values);
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
                                    <Field
                                        as="select"
                                        className="form-select"
                                        name="source_destination_id"
                                        aria-label="From"
                                    >
                                        <option value="">Where from go?</option>
                                        {locationData &&
                                            locationData.map((location, key) => (
                                                <option key={key} value={location._id}>
                                                    {location.location_name}
                                                </option>
                                            ))}
                                    </Field>
                                    <i className="alt-icon fa fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="field-label">To</div>
                                <div className="field-inner">
                                    <Field
                                        as="select"
                                        className="form-select"
                                        name="destination_id"
                                        aria-label="To"
                                    >
                                        <option value="">Where to go?</option>
                                        {locationData &&
                                            locationData.map((location, key) => (
                                                <option key={key} value={location._id}>
                                                    {location.location_name}
                                                </option>
                                            ))}
                                    </Field>
                                    <i className="alt-icon fa fa-map-marker-alt"></i>
                                </div>
                            </div>
                            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
                                <div className="field-label">Journey Date</div>
                                <div className="field-inner">
                                    <Field
                                        as={TextField}
                                        className="datepicker"
                                        fullWidth
                                        type="date"
                                        name="journey_date"
                                        // inputProps={{
                                        //     min: new Date().toISOString().split("T")[0],
                                        // }}
                                    />
                                    {/* <i className="alt-icon fa fa-calendar-alt"></i> */}
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
            <FlightCard formData={formData} onResetFormData={handleResetFormData}/>
        </>
    );
}
