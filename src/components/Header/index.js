import React from "react";
import Link from "gatsby-link";
import glamorous from "glamorous";

const homeRef = "/";
// const blogRef = '/blog';

let location = location || { pathname: "" };

const Header = () => (
  <div
    style={{
      background: "white",
      position: "relative",
      zIndex: 2,
      backgroundColor: "white",
      paddingTop: "10px"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        position: "relative",
        zIndex: 2
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
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "10px"
          }}
        >
          <Link
            to="/"
            className={location.pathname === homeRef ? "active" : ""}
            style={{
              textDecoration: "none",
              marginRight: "15px"
            }}
          >
            home
          </Link>
          <Link
            to="/blog"
            className={location.pathname.includes("blog") ? "active" : ""}
            style={{
              textDecoration: "none"
            }}
          >
            blog
          </Link>
          <Link
            to="/contact"
            className={location.pathname.includes("contact") ? "active" : ""}
            style={{
              textDecoration: "none",
              marginLeft: "15px"
            }}
          >
            contact
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
