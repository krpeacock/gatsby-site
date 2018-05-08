import React from "react";
import Link from "gatsby-link";
import glamorous from "glamorous";

const homeRef = "/";
// const blogRef = '/blog';

const Header = () => (
  <div
    style={{
      background: "white",
      position: "relative",
      zIndex: 2,
      backgroundColor: "white"
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
            className={window.location.pathname === homeRef ? "active" : ""}
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
  </div>
);

export default Header;
