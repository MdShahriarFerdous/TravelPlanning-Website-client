import CountUp from "react-countup";

const CounterOne = ({ number, title, suffix = "" }) => {
  const formattedTitle = { __html: title };
  return (
    <div className="fact-block col-lg-3 col-md-6 col-sm-12">
      <div className="inner clearfix">
        <div className="fact-count">
          <div className="count-box">
            <CountUp start={0} end={number} duration={2} enableScrollSpy={true} suffix={suffix} scrollSpyOnce={true}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <i>+</i>
          </div>
        </div>
        <div className="fact-title" dangerouslySetInnerHTML={formattedTitle}></div>
      </div>
    </div>
  );
};

export default CounterOne;
