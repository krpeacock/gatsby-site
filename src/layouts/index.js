import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import glamorous from "glamorous";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "./index.css";

const ContactList = glamorous.div({
  width: "70px",
  position: "absolute",
  zIndex: "1",
  left: "50%",
  alignSelf: "center",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  marginLeft: "23px"
});

const StatefulContactList = ({ contactOpen }) => (
  <ContactList
    style={{ top: contactOpen ? "9em" : "7em" }}
    contactOpen={contactOpen}
  >
    <a href="https://github.com/krpeacock">GitHub</a>
  </ContactList>
);

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactOpen: false
    };
  }
  render() {
    const { children } = this.props;
    const { contactOpen } = this.state;
    return (
      <div>
        <div style={{ minHeight: "100%", paddingBottom: "60px" }}>
          <Helmet
            title="PeacockWeb"
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <link rel="icon" type="image/png" src="/static/favicon.png" />
          </Helmet>

          <Header />
          <StatefulContactList contactOpen={contactOpen}>
            GitHub
          </StatefulContactList>
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
