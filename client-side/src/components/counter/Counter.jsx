import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";

const Counter = () => {
  return (
    <div class="facts-section">
      <div class="auto-container">
        <div class="fact-counter">
          <div class="row clearfix">
            <div class="fact-block col-lg-3 col-md-6 col-sm-12">
              <div class="inner clearfix">
                <div class="fact-count">
                  <div class="count-box">
                    <span class="count-text" data-stop="120" data-speed="2000">
                      0
                    </span>
                    <i>+</i>
                  </div>
                </div>
                <div class="fact-title">
                  Total <br />
                  Destination
                </div>
              </div>
            </div>

            <div class="fact-block col-lg-3 col-md-6 col-sm-12">
              <div class="inner clearfix">
                <div class="fact-count">
                  <div class="count-box">
                    <span class="count-text" data-stop="500" data-speed="3000">
                      0
                    </span>
                    <i>+</i>
                  </div>
                </div>
                <div class="fact-title">
                  Travel <br />
                  Packages
                </div>
              </div>
            </div>

            <div class="fact-block col-lg-3 col-md-6 col-sm-12">
              <div class="inner clearfix">
                <div class="fact-count">
                  <div class="count-box">
                    <span class="count-text" data-stop="12" data-speed="2000">
                      0
                    </span>
                    K<i>+</i>
                  </div>
                </div>
                <div class="fact-title">
                  Total <br />
                  Travelers
                </div>
              </div>
            </div>

            <div class="fact-block col-lg-3 col-md-6 col-sm-12">
              <div class="inner clearfix">
                <div class="fact-count">
                  <div class="count-box">
                    <span class="count-text" data-stop="7" data-speed="2000">
                      0
                    </span>
                    K<i>+</i>
                  </div>
                </div>
                <div class="fact-title">
                  Positive <br />
                  Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
