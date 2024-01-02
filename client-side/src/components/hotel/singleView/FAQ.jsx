export default function FAQ() {
  return (
    <div className="t-faqs">
      <h3>Frequently Asked Questions</h3>
      <ul className="accordion-box faqs-accordion clearfix">
        <li className="accordion block active-block">
          <div className="acc-btn active">
            Is The Ritz London a pet-friendly hotel?{" "}
            <span className="arrow fa fa-plus"></span>
          </div>
          <div className="acc-content current">
            <div className="content">
              <div className="travilo-text">
                <p>
                  Unfortunately, The Ritz London does not allow pets on the
                  premises, except for registered guide dogs or service animals,
                  in compliance with hotel regulations and guest comfort.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="accordion block">
          <div className="acc-btn">
            Does The Ritz London offer airport transfer services?
            <span className="arrow fa fa-plus"></span>
          </div>
          <div className="acc-content">
            <div className="content">
              <div className="travilo-text">
                <p>
                  Yes, The Ritz London can arrange airport transfer services for
                  guests upon request. Whether you require a private car,
                  limousine, or chauffeur-driven vehicle, our concierge team
                  will be delighted to assist you in making the necessary
                  arrangements.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="accordion block">
          <div className="acc-btn">
            Are there non-smoking rooms available at The Ritz London?{" "}
            <span className="arrow fa fa-plus"></span>
          </div>
          <div className="acc-content">
            <div className="content">
              <div className="travilo-text">
                <p>
                  Yes, The Ritz London is committed to providing a smoke-free
                  environment for all guests. All rooms and public areas are
                  designated as non-smoking areas, in accordance with the hotels
                  policy.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="accordion block">
          <div className="acc-btn">
            What dining options are available at The Ritz London?
            <span className="arrow fa fa-plus"></span>
          </div>
          <div className="acc-content">
            <div className="content">
              <div className="travilo-text">
                <p>
                  The Ritz London offers an exceptional dining experience at
                  several renowned restaurants. Guests can savor traditional
                  afternoon tea in the elegant Palm Court, indulge in gourmet
                  cuisine at the Michelin-starred Ritz Restaurant, and enjoy
                  delectable light bites at The Rivoli Bar, known for its
                  exquisite cocktails.
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="accordion block">
          <div className="acc-btn">
            Is there a dress code for dining and afternoon tea at The Ritz
            London? <span className="arrow fa fa-plus"></span>
          </div>
          <div className="acc-content">
            <div className="content">
              <div className="travilo-text">
                <p>
                  Yes, The Ritz London maintains a formal dress code in the
                  public areas and restaurants to maintain the elegant ambiance.
                  For gentlemen, a jacket and tie are required for dining in The
                  Ritz Restaurant and The Palm Court. During afternoon tea,
                  smart casual attire is recommended for both ladies and
                  gentlemen. We kindly ask all guests to adhere to the dress
                  code to ensure an enjoyable and sophisticated dining
                  experience.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
