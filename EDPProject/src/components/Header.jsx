import TopNav from "./TopNav";
import PropTypes from "prop-types";

const Header = ({ className = "" }) => {
  return (
    <div
      className={`max-w-screen-2xl `}
    >
      <img
        className="absolute top-[0rem] left-[0rem] w-[120rem] h-[69.875rem]"
        alt=""
        src="/headerbg.svg"
      />
      <div className="absolute top-[39.125rem] left-[109.875rem] rounded-[50%] bg-silver w-[1.25rem] h-[1.25rem]" />
      <img
        className="absolute top-[39.125rem] left-[109.875rem] w-[1.25rem] h-[1.25rem]"
        alt=""
        src="/group-11.svg"
      />
      <img
        className="absolute top-[18.125rem] left-[66.625rem] w-[33.063rem] h-[42.875rem] object-cover"
        alt=""
        src="/alp-center-amrait-2-1@2x.png"
      />
      <img
        className="absolute top-[0.063rem] left-[0rem] w-[119.5rem] h-[69.813rem]"
        alt=""
        src="/group-452.svg"
      />
      <TopNav />
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
