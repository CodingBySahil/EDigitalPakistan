import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const TopNav = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2.5rem] left-[calc(50%_-_816px)] bg-darkgray w-[102.125rem] overflow-hidden flex flex-row items-center justify-between py-[0.375rem] px-[1.875rem] box-border text-left text-[1.375rem] text-white font-poppins ${className}`}
    >
      <img
        className="w-[18.125rem] relative h-[4.125rem] object-cover"
        alt=""
        src="/edp-logo@2x.png"
      />
      <Link to={'/home'} className="relative tracking-[0.02em] text-white no-underline">Home</Link>
      <Link to={'/courses'}  className="relative tracking-[0.02em] text-white no-underline">Courses</Link>
      <Link to={'/instructors'}  className="relative tracking-[0.02em] text-white no-underline">Instructors</Link>
      <Link to={'/blog'}  className="relative tracking-[0.02em] text-white no-underline">Blog</Link>
      <Link to={'/about-us'}  className="relative tracking-[0.02em] text-white no-underline">About Us</Link>
      <div className="w-[10.194rem] shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-61xl [background:conic-gradient(from_90deg_at_50%_50%,_#fff_0deg,_#fff_360deg)] h-[3.75rem] flex flex-row items-center justify-center py-[0.812rem] px-[3.125rem] box-border text-dimgray">
        <Link to={'/login'} className="relative tracking-[0.02em] font-medium no-underline text-dimgray">Login</Link>
      </div>
      <div className="w-[10.194rem] shadow-[0px_20px_24px_rgba(0,_0,_0,_0.03)] rounded-61xl bg-gray-300 h-[3.75rem] flex flex-row items-center justify-center py-[0.75rem] px-[2.187rem] box-border">
        <Link to={'/signup'} className="relative tracking-[0.02em] font-medium text-white no-underline">Sign Up</Link>
      </div>
    </div>
  );
};

TopNav.propTypes = {
  className: PropTypes.string,
};

export default TopNav;
