export default function Search() {
  return (
    <div className="sb-widget search-widget">
      <div className="w-inner">
        <div className="s-title">
          <i className="fa-solid fa-caret-right"></i>
          <h4>Search</h4>
        </div>
        <form method="post" action="https://tech-taqwa.com/html/contact.html">
          <div className="form-group">
            <input
              type="search"
              name="search-field"
              
              placeholder="Type your keyword"
              required
            />
            <button type="submit">
              <span className="icon fa fa-search"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
