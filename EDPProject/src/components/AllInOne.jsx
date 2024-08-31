import PropTypes from "prop-types";

const AllInOne = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[74.563rem] left-[14.063rem] w-[91.875rem] h-[48.563rem] text-center text-[1.875rem] text-darkslateblue-200 font-poppins ${className}`}
    >
      <b className="absolute top-[0rem] left-[38.25rem] text-[2.25rem] leading-[180%] text-left">
        <span className="whitespace-pre-wrap">{`How it  `}</span>
        <span className="text-turquoise">Works</span>
      </b>
      <div className="absolute top-[6.313rem] left-[20rem] text-[1.5rem] leading-[180%] text-slategray-100 inline-block w-[52.313rem]">
        TOTC is one powerful online software suite that combines all the tools
        needed to run a successful school or office.
      </div>
      <div className="absolute top-[21.688rem] left-[0rem] shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white w-[28.125rem] h-[26.875rem]" />
      <div className="absolute top-[21.688rem] left-[31.875rem] shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white w-[28.125rem] h-[26.875rem]" />
      <div className="absolute top-[21.688rem] left-[63.75rem] shadow-[0px_10px_60px_rgba(38,_45,_118,_0.08)] rounded-xl bg-white w-[28.125rem] h-[26.875rem]" />
      <div className="absolute top-[26.688rem] left-[3.125rem] font-medium inline-block w-[21.438rem]">
        Select the Grade/Class that you are in.
      </div>
      <div className="absolute top-[26.688rem] left-[34.875rem] font-medium inline-block w-[21.563rem]">
        study the textbooks at your own face with flexibility.
      </div>
      <div className="absolute top-[26.688rem] left-[67.438rem] font-medium">
        <p className="m-0">{`Pay for the additional `}</p>
        <p className="m-0">lessons - if you like it</p>
      </div>
      <div className="absolute top-[36.438rem] left-[3.438rem] text-[1.25rem] leading-[180%] text-slategray-100 inline-block w-[21.313rem]">
        you can select any grade that you want to study in.we are flexible offer
        all.
      </div>
      <div className="absolute top-[36.438rem] left-[34.188rem] text-[1.25rem] leading-[180%] text-slategray-100 inline-block w-[23.563rem]">{`you can study any course, any topic at your convenience. in each topic, you can do the exercise, reading, pronunciation,, words meaning etc. `}</div>
      <div className="absolute top-[36.438rem] left-[68.375rem] text-[1.25rem] leading-[180%] text-slategray-100 inline-block w-[19.938rem]">
        The first lesson is free - pay for the rest with easypaisa. This will
        help us to add more contents and subjects.
      </div>
      <img
        className="absolute top-[18.125rem] left-[42.813rem] w-[6.25rem] h-[6.25rem]"
        alt=""
        src="/group-80.svg"
      />
      <img
        className="absolute top-[18.125rem] left-[74.688rem] w-[6.25rem] h-[6.25rem]"
        alt=""
        src="/group-81.svg"
      />
      <img
        className="absolute top-[18.125rem] left-[10.938rem] w-[6.25rem] h-[6.25rem]"
        alt=""
        src="/group-79.svg"
      />
    </div>
  );
};

AllInOne.propTypes = {
  className: PropTypes.string,
};

export default AllInOne;
