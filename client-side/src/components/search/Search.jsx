export default function Search() {
  return (
    <div className="form-box site-form">
      <form method="post" action="https://tech-taqwa.com/html/index.html">
        <div className="row clearfix">
          <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-12">
            <div className="field-label">Destination</div>
            <div className="field-inner">
              <input
                type="text"
                name="field-name"
                placeholder="Where to go?"
                required
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
                required
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
                required
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
                required
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
      </form>
    </div>
  );
}
