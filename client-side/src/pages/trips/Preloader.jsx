import React from "react";

const Preloader = () => {
  return (
    <div className="loader-wrap">
      <div className="preloader">
        <div className="preloader-close">x</div>
        <div id="handle-preloader" className="handle-preloader">
          <div className="animation-preloader">
            <div className="txt-loading">
              <span data-text-preloader="W" className="letters-loading">
                W
              </span>
              <span data-text-preloader="e" className="letters-loading">
                e
              </span>
              <span data-text-preloader="T" className="letters-loading">
                T
              </span>
              <span data-text-preloader="r" className="letters-loading">
                r
              </span>
              <span data-text-preloader="a" className="letters-loading">
                a
              </span>
              <span data-text-preloader="v" className="letters-loading">
                v
              </span>
              <span data-text-preloader="e" className="letters-loading">
                e
              </span>
              <span data-text-preloader="l" className="letters-loading">
                l
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
