import { useEffect, useState } from "react";
import { useSearch } from "../../context/searchContext";
import { Formik, Form, Field } from "formik";
export default function Search() {
  // eslint-disable-next-line no-unused-vars
  const [type, setType] = useState("hotels");
  const [locationId, setLocationId] = useSearch();

  const initialFormValues = {
    searchHotel: "",
  };
  const fetchInitialValues = () => {
    return Promise.resolve({
      searchHotel: locationId,
    });
  };
  let formikInstance;

  useEffect(() => {
    fetchInitialValues().then((fetchedValues) => {
      formikInstance.setValues(fetchedValues);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationId]);

  const handleSubmit = (values) => {
    localStorage.setItem("search-hotel", JSON.stringify(values.searchHotel));
    setLocationId(values.searchHotel);
    window.location.replace(
      `${type}${values.searchHotel ? "?location=" + values.searchHotel : ""}`
    );
  };

  return (
    <div className="form-box site-form">
      <Formik
        initialValues={initialFormValues}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        innerRef={(formik) => (formikInstance = formik)}
      >
        <Form>
          <div className="row clearfix">
            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="field-label">Destination</div>
              <div className="field-inner">
                <Field
                  id="searchHotel"
                  type="text"
                  name="searchHotel"
                  placeholder="Where to go?"
                />
                <i className="alt-icon fa fa-map-marker-alt"></i>
              </div>
            </div>
            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="field-label">Start</div>
              <div className="field-inner">
                <input
                  className="datepicker"
                  type="text"
                  name="field-name"
                  placeholder="Check in"
                  // required
                />
                <i className="alt-icon fa fa-calendar-alt"></i>
              </div>
            </div>
            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="field-label">End</div>
              <div className="field-inner">
                <input
                  className="datepicker"
                  type="text"
                  name="field-name"
                  placeholder="Check out"
                  // required
                />
                <i className="alt-icon fa fa-calendar-alt"></i>
              </div>
            </div>
            <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="field-label">Guest</div>
              <div className="field-inner">
                <input
                  type="text"
                  name="field-name"
                  placeholder="Guests"
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
  );
}
