import PropTypes from "prop-types";

const YouCanDoWithTOTC = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[182.438rem] left-[11.625rem] w-[96.688rem] h-[32rem] text-left text-[1.5rem] text-slategray-100 font-poppins ${className}`}
    >
      <div className="absolute top-[0rem] left-[50.125rem] rounded-xl bg-deepskyblue-100 w-[8.625rem] h-[8.625rem]" />
      <div className="absolute top-[3.188rem] left-[0rem] rounded-[50%] bg-mediumspringgreen-100 w-[4.563rem] h-[4.563rem]" />
      <div className="absolute top-[13.125rem] left-[1.563rem] tracking-[0.02em] leading-[180%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical] w-[40.938rem]">{`This include reading, words meaning, pronunciation, practice with interactive exercises, long and short questions & answers with AI assistance, test your skills and knowledge with exams, audio visuals aids, communication with physical teacher nearby. `}</div>
      <div className="absolute top-[4rem] left-[1.563rem] text-[2.25rem] leading-[160%] font-medium inline-block w-[40.938rem] text-darkslateblue-200">
        <span>{`Everything you can do in a physical classroom, `}</span>
        <span className="text-turquoise">you can do with DALP</span>
      </div>
      <div className="absolute top-[17.563rem] left-[82.25rem] rounded-xl bg-mediumspringgreen-100 w-[14.438rem] h-[14.438rem]" />
      <img
        className="absolute top-[0.938rem] left-[51.375rem] w-[44rem] h-[29.631rem]"
        alt=""
        src="/group-17.svg"
      />
      <img
        className="absolute top-[17.688rem] left-[44.75rem] w-[1.875rem] h-[1.875rem]"
        alt=""
        src="/ellipse-13.svg"
      />
    </div>
  );
};

YouCanDoWithTOTC.propTypes = {
  className: PropTypes.string,
};

export default YouCanDoWithTOTC;
