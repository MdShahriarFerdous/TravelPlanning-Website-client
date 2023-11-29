export default function Socials() {
  return (
    <div className="sb-widget social-widget">
      <div className="w-inner">
        <div className="s-title">
          <i className="fa-solid fa-caret-right"></i>
          <h4>Follow Us</h4>
        </div>
        <ul className="social-links clearfix">
          <li>
            <a href="#" className="facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="twitter">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#" className="youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
