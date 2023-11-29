import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/sections/global-settings.css";
import CounterOne from "./CounterOne";

const Counter = () => {
  return (
    <div className="facts-section">
      <div className="auto-container">
        <div className="fact-counter">
          <div className="row clearfix">
            <CounterOne number={120} title="Total<br/>Destination" />
            <CounterOne number={500} title="Travel<br/>Packages" />
            <CounterOne number={12} suffix="K" title="Total<br/>Travelers" />
            <CounterOne number={7} suffix="K" title="Positive<br/>Reviews" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
