import AppLayout from "../../components/applayout/AppLayout";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { Formik, Field, Form } from "formik";
import moment from "moment";
import axios from "axios";

import "react-datepicker/dist/react-datepicker.css";
import "./customDatePicker.css";

const TripsSearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialValues = {
    destination: "",
    startDate: new Date(),
    endDate: new Date(),
  };

  const handleSubmit = async (values) => {

    const startDateMoment = moment(values.startDate, "ddd MMM DD YYYY HH:mm:ss ZZ");
    const endDateMoment = moment(values.endDate, "ddd MMM DD YYYY HH:mm:ss ZZ");

    const diff = moment.duration(endDateMoment.diff(startDateMoment));
    const duration = diff.asDays();

    try {
      let postBody = {
        location_name: values.destination,
        tripLength: duration,
      };
      let result = await axios.post("/itinerary", postBody);

      navigate("/tripsdetails", { state: result.data.result });
    } catch (error) {
      console.error(error);
    }
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
                          <Field id="destination" type="text" name="destination" placeholder="Where to go?" />
                          <i className="alt-icon fa fa-map-marker-alt" />
                        </div>
                      </div>
                      <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="field-label">Start Date</div>
                        <div className="field-inner customDatePickerWidth">
                          <Field name="startDate">{({ field, form }) => <DatePicker id="startDate" wrapperClassName="datepicker" selected={field.value} onChange={(date) => form.setFieldValue(field.name, date)} />}</Field>
                          <i className="alt-icon fa fa-calendar-alt" />
                        </div>
                      </div>
                      <div className="form-group col-xl-4 col-lg-4 col-md-4 col-sm-12">
                        <div className="field-label">End Date</div>
                        <div className="field-inner customDatePickerWidth">
                          <Field name="endDate">{({ field, form }) => <DatePicker id="endDate" wrapperClassName="datepicker" selected={field.value} onChange={(date) => form.setFieldValue(field.name, date)} />}</Field>
                          <i className="alt-icon fa fa-calendar-alt" />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="theme-btn f-btn">
                      <span>
                        Create <i className="fa-solid fa-search" />
                      </span>
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
