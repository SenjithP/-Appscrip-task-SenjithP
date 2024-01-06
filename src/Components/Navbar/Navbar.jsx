import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { RiArrowDropDownLine } from "react-icons/ri";
import LogoImage from "../../assets/Images/Logo.png";
import PropTypes from "prop-types";
import "./Navbar.css"

const Navbar = ({ showNavbar, isMobile }) => {
  return (
    <section className="navbar">
      <div className="navbar-elements">
        {isMobile && (
          <button className="navbar-toggle" >
            ☰
          </button>
        )}
        <img className="navbar-logo" src={LogoImage} alt="Logo" />
        <div className="branding">
          <h1 className="navbar-logo-heading">LOGO</h1>
        </div>
        <div className="navbar-actions">
          <CiSearch className="navbar-icon" />
          <CiHeart className="navbar-icon" />
          <LiaShoppingBagSolid className="navbar-icon" />
          <CiUser className="navbar-icon" />
          <div className="language-selector">
            <h5>ENG</h5>
            <RiArrowDropDownLine className="navbar-icon" />
          </div>
        </div>
      </div>
      <div className={`navbar-links ${showNavbar ? "show" : ""}`}>
        <h5 className="navbar-link">SHOP</h5>
        <h5 className="navbar-link">SKILLS</h5>
        <h5 className="navbar-link">STORIES</h5>
        <h5 className="navbar-link">ABOUT</h5>
        <h5 className="navbar-link">CONTACT US</h5>
      </div>
    </section>
  );
};

Navbar.propTypes = {
  showNavbar: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  toggleNavbar: PropTypes.func.isRequired,
};
export default Navbar;
