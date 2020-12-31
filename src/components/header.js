import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = ({ siteTitle, siteDescription }) => (
  <header className="flex flex-col h-48 items-center justify-center">
    <h3 className="text-lg font-bold font-sans">
      <Link to="/">{siteTitle}</Link>
    </h3>
    <h4 className="font-sans">{siteDescription}</h4>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
};

export default Header;
