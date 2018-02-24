import React from "react";
import Link from "gatsby-link";

const homeRef = "/";
// const blogRef = '/blog';

const Header = () => (
  <div
    style={{
      background: "white"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          width: "auto",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <img
          src="/static/peacock-logo.png"
          style={{ width: "110px", height: "100px" }}
        />
      </Link>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Link
          to="/"
          active={window.location.pathname === homeRef}
          style={{
            color: "#415161",
            textDecoration: "none",
            marginRight: "15px"
          }}
        >
          home
        </Link>
        <Link
          to="/blog"
          style={{
            color: "black",
            textDecoration: "none"
          }}
        >
          blog
        </Link>
        <Link
          to="#"
          style={{
            color: "#415161",
            textDecoration: "none",
            marginLeft: "15px"
          }}
        >
          contact
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
