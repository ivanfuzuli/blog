/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <div>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        siteDescription={data.site.siteMetadata?.description || `Description`}
      />
      <main>{children}</main>
      <footer className="text-center">
        © {new Date().getFullYear()}, Aşk ile
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> aracılığıyla yapıldı.
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
