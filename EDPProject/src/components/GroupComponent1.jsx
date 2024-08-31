import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[27.119rem] left-[1.575rem] w-[91.731rem] h-[54.856rem] text-left text-[1.375rem] text-slategray-100 font-poppins ${className}`}
    >
      <div className="absolute top-[37.994rem] left-[63.906rem] tracking-[0.02em] leading-[180%] inline-block w-[27.831rem] h-[12.581rem]">
        <b>Aligned with Curriculum:</b>
        <span>
          {" "}
          Ensure that the self-paced, sequential study aligns with the standard
          curriculum requirements and prepares students for formal exams.
        </span>
      </div>
      <div className="absolute top-[4.4rem] left-[57.719rem] text-[2.5rem] leading-[160%] font-semibold inline-block w-[32.863rem] h-[12.081rem] text-darkslateblue-200">
        <span>{`A `}</span>
        <span className="text-turquoise">user interface</span>
        <span> designed for the interactive classroom</span>
      </div>
      <img
        className="absolute top-[29.944rem] left-[29.106rem] w-[16.006rem] h-[16.606rem]"
        alt=""
        src="/ellipse-19.svg"
      />
      <div className="absolute top-[37.619rem] left-[31.225rem] rounded-[50%] bg-salmon w-[1.819rem] h-[1.888rem]" />
      <div className="absolute top-[0.5rem] left-[9.7rem] rounded-[50%] bg-darkturquoise-100 w-[1.819rem] h-[1.888rem]" />
      <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-mediumspringgreen-100 w-[8.488rem] h-[8.806rem]" />
      <div className="absolute top-[19.25rem] left-[57.963rem] shadow-[0px_15px_44px_rgba(13,_15,_28,_0.12)] rounded-[50%] bg-gray-100 w-[3.638rem] h-[3.775rem]" />
      <div className="absolute top-[27.05rem] left-[57.963rem] shadow-[0px_15px_44px_rgba(13,_15,_28,_0.12)] rounded-[50%] bg-gray-100 w-[3.638rem] h-[3.775rem]" />
      <div className="absolute top-[37.619rem] left-[58.206rem] shadow-[0px_15px_44px_rgba(13,_15,_28,_0.12)] rounded-[50%] bg-gray-100 w-[3.638rem] h-[3.775rem]" />
      <img
        className="absolute top-[51.081rem] left-[58.206rem] w-[3.638rem] h-[3.775rem]"
        alt=""
        src=""
      />
      <div className="absolute top-[18.619rem] left-[64.144rem] tracking-[0.02em] leading-[180%] inline-block w-[26.856rem] h-[7.55rem]">
        <b>Modular Course Design:</b>
        <span>
          {" "}
          students have full control, over selection of subjects/topics.
        </span>
      </div>
      <div className="absolute top-[20.319rem] left-[58.994rem] w-[1.613rem] h-[1.638rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-darkslateblue-200 w-[0.719rem] h-[0.744rem]" />
        <div className="absolute top-[0.894rem] left-[0rem] rounded-sm bg-darkslateblue-200 w-[0.719rem] h-[0.744rem]" />
        <div className="absolute top-[0rem] left-[0.894rem] rounded-sm bg-darkslateblue-200 w-[0.719rem] h-[0.744rem]" />
        <div className="absolute top-[0.894rem] left-[0.894rem] rounded-sm bg-darkorange w-[0.719rem] h-[0.744rem]" />
      </div>
      <div className="absolute top-[27.175rem] left-[64.144rem] tracking-[0.02em] leading-[180%] inline-block w-[26.856rem] h-[10.063rem]">
        <b>Interactive Lessons:</b>
        <span>
          {" "}
          Use interactive videos, quizzes, and simulations that allow students
          to engage with the material actively.
        </span>
      </div>
      <div className="absolute top-[27.806rem] left-[58.931rem] w-[1.7rem] h-[1.638rem]">
        <div className="absolute top-[0.375rem] left-[0.488rem] rounded-sm bg-darkslateblue-200 w-[1.213rem] h-[1.256rem]" />
        <div className="absolute top-[0rem] left-[0rem] rounded-sm bg-darkorange w-[1.288rem] h-[1.338rem]" />
      </div>
      <img
        className="absolute top-[38.563rem] left-[59.113rem] w-[1.819rem] h-[1.638rem] overflow-hidden"
        alt=""
        src="/users-2.svg"
      />
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
