import PropTypes from "prop-types";

const WhatIsTOTC = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[127.438rem] left-[12.5rem] w-[91.875rem] h-[48.25rem] text-center text-[1.5rem] text-darkslateblue-200 font-poppins ${className}`}
    >
      <div className="absolute top-[10.313rem] left-[0rem] tracking-[0.02em] leading-[180%] text-slategray-100 inline-block w-[91.875rem]">{`DALP is a Digital Accelerated Learning Pathways provides flexible digital learning pathways that ensure both in-school and out-of-school children can learn equally, bridging accessibility gaps and fostering inclusivity to equip all learners with the knowledge & skills they need.`}</div>
      <b className="absolute top-[0rem] left-[34.375rem] text-[3.063rem] leading-[180%]">
        <span>{`What is `}</span>
        <span className="text-turquoise">DALP?</span>
      </b>
      <div className="absolute top-[5rem] left-[16.063rem] text-[1.938rem] leading-[180%]">
        <i className="font-bold">{`Our vision is no more `}</i>
        <i className="uppercase font-extrabold text-lightseagreen">
          out-of-school
        </i>
        <i className="font-bold whitespace-pre-wrap"> children in Pakistan!</i>
      </div>
      <div className="absolute top-[22.25rem] left-[25.5rem] [filter:drop-shadow(0px_15px_20px_rgba(0,_0,_0,_0.39))] w-[38.563rem] h-[26rem] text-[2rem] text-white">
        <div className="absolute top-[8.938rem] left-[12.125rem] font-semibold">
          FOR STUDENTS
        </div>
        <div className="absolute top-[0rem] left-[0rem] w-[38.563rem] h-[26rem] text-[1.375rem]">
          <img
            className="absolute top-[0rem] left-[0rem] w-[38.563rem] h-[26rem] object-cover"
            alt=""
            src="/group-23@2x.png"
          />
          <div className="absolute top-[13rem] left-[10.563rem] rounded-61xl bg-deepskyblue-200 w-[17.688rem] h-[5rem]" />
          <div className="absolute top-[14.5rem] left-[13.813rem] font-medium">
            Enter classroom
          </div>
        </div>
      </div>
    </div>
  );
};

WhatIsTOTC.propTypes = {
  className: PropTypes.string,
};

export default WhatIsTOTC;
