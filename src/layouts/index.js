import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const ContactList = styled.div`
  width: 70px;
  position: absolute;
  z-index: 1;
  left: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin-left: 23px;
`;

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactOpen: false
    };
  }
  render() {
    const { children, location } = this.props;
    const { contactOpen } = this.state;
    return (
      <div>
        <div style={{ minHeight: "100%", paddingBottom: "60px" }}>
          <Helmet
            title="Kyle Peacock's personal site"
            meta={[
              {
                name: "description",
                content:
                  "Perpetually in-progress website for a professional developer"
              },
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <link rel="icon" type="image/png" src="/static/favicon.png" />
          </Helmet>
          <Header location={location} />
          <div
            style={{
              margin: "0 auto",
              paddingTop: 0,
              paddingLeft: 0
            }}
          >
            {children()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default TemplateWrapper;
