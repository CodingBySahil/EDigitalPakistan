import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0rem] left-[0rem] w-[93.063rem] h-[128.494rem] text-left text-[1.25rem] text-darkslateblue-100 font-poppins ${className}`}
    >
      <div className="absolute top-[127.288rem] left-[52.838rem] rounded-[50%] bg-mediumspringgreen-200 w-[1.319rem] h-[1.206rem]" />
      <div className="absolute top-[110.05rem] left-[88.581rem] rounded-[50%] bg-hotpink w-[1.119rem] h-[1.025rem]" />
      <div className="absolute top-[89.138rem] left-[50.594rem] rounded-[50%] bg-royalblue w-[6.856rem] h-[6.269rem]" />
      <div className="absolute top-[87.513rem] left-[58.706rem] rounded-[50%] bg-sandybrown w-[1.581rem] h-[1.444rem]" />
      <div className="absolute top-[90.281rem] left-[54.144rem] shadow-[0px_9.1px_43.69px_rgba(40,_43,_110,_0.1)] rounded-[18.21px] bg-white w-[31.65rem] h-[35.356rem]" />
      <div className="absolute top-[98.238rem] left-[56.4rem] text-[1.938rem] leading-[160%] font-semibold inline-block w-[26.644rem] h-[6.506rem]">
        True or false? are plants living things?
      </div>
      <img
        className="absolute top-[88.956rem] left-[78.556rem] w-[6.181rem] h-[5.65rem] object-contain"
        alt=""
        src="/group-90@2x.png"
      />
      <img
        className="absolute top-[91.969rem] left-[82.381rem] w-[6.388rem] h-[5.838rem] object-contain"
        alt=""
        src="/group-88@2x.png"
      />
      <div className="absolute top-[92.694rem] left-[56.4rem] rounded-[72.82px] bg-lightsteelblue-100 w-[12rem] h-[3.013rem]" />
      <div className="absolute top-[93.119rem] left-[58.706rem] leading-[160%] font-medium text-steelblue inline-block w-[7.45rem] h-[2.113rem]">
        Question 1
      </div>
      <img
        className="absolute top-[109.088rem] left-[58.706rem] w-[27.963rem] h-[14.325rem] object-cover"
        alt=""
        src="/mask-group@2x.png"
      />
      <img
        className="absolute top-[107.156rem] left-[56.138rem] w-[31.394rem] h-[16.081rem] object-cover"
        alt=""
        src="/mask-group-1@2x.png"
      />
      <div className="absolute top-[120.6rem] left-[67.938rem] w-[25.125rem] h-[7.531rem] text-mediumaquamarine">
        <div className="absolute top-[0rem] left-[0rem] shadow-[0px_18.2px_52.8px_rgba(40,_43,_110,_0.08)] rounded-[18.21px] bg-white w-[25.125rem] h-[7.531rem]" />
        <div className="absolute top-[3.794rem] left-[20.513rem] rounded-[50%] bg-lightcyan w-[2.575rem] h-[2.413rem]" />
        <div className="absolute top-[2.106rem] left-[2.775rem] rounded-[50%] bg-lightcyan w-[4.088rem] h-[3.738rem]" />
        <div className="absolute top-[1.688rem] left-[10.025rem] leading-[160%] font-semibold inline-block w-[13.125rem] h-[4.219rem]">
          you will instantly get answer.
        </div>
        <img
          className="absolute top-[1.388rem] left-[1.981rem] w-[6.075rem] h-[4.806rem] object-contain"
          alt=""
          src="/group-86@2x.png"
        />
      </div>
      <div className="absolute top-[0rem] left-[0rem] w-[5.025rem] h-[102.419rem]">
        <div className="absolute top-[0rem] left-[0rem] w-[5.025rem] h-[102.419rem]">
          <div className="absolute top-[97.825rem] left-[0rem] shadow-[2px_10px_34px_rgba(15,_19,_39,_0.15)] rounded-[50%] bg-whitesmoke w-[5.025rem] h-[4.594rem]" />
          <img
            className="absolute h-[2.29%] w-[51.99%] top-[0%] right-[20.52%] bottom-[97.71%] left-[27.49%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/group-69.svg"
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
