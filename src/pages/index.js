import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";
import Carousel from "../components/Carousel/Carousel";

const wellStyles = {
  backgroundColor: "#f9fafb",
  borderTop: "1px solid #e6e9eb",
  borderBottom: "1px solid #e6e9eb",
  fontFamily: "Roboto",
  fontWeight: "300",
  padding: "30px",
  textAlign: "center",
  color: "#8496b3",
  width: "100vw",
  position: "relative"
};

const IndexPage = () => (
  <div>
    <div style={wellStyles}>
      <h2 style={{ color: "#415161" }}>Creative Developer</h2>
      <p style={{ maxWidth: "960px", margin: "auto" }}>
        My name is Kyle Peacock, and I'm a full-stack web developer and
        marketing specialist. Node.js, Express, React.js, and Graphql are my
        go-to prototyping stack, ​and I have worked with a number of older web
        frameworks for legacy sites.
      </p>
    </div>
    <Container>
      <table style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td>
              <h3 style={{ fontFamily: "Roboto" }}>JavaScript</h3>
              <p style={{ fontFamily: "Roboto" }}>
                Every day, JavaScript is taking on a more important role in
                enabling the modern web. I'm one of many developers who believe
                in driving the language forward as we get closer to having a
                "write once, run anywhere" tool that is a delight to program in.
              </p>
            </td>
            <td>
              <h3 style={{ fontFamily: "Roboto" }}>Full Stack</h3>
              <p style={{ fontFamily: "Roboto" }}>
                Businesses today demand a developer who understands how all the
                parts of a web application fit together. I can work on any stage
                of development on a web application, from hosting and database
                configuration to front-end design frameworks.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h3 style={{ fontFamily: "Roboto" }}>Adobe Creative Cloud</h3>
              <p style={{ fontFamily: "Roboto" }}>
                I've been using the Creative Suite since 2006, beginning with
                Flash animations. Since then, I have used most of the products
                to some degree or another, but my strongest skills are in
                Illustrator, Photoshop, Premiere, and Dreamweaver. ​
              </p>
            </td>
            <td>
              <h3 style={{ fontFamily: "Roboto" }}>User Experience</h3>
              <p style={{ fontFamily: "Roboto" }}>
                Many engineers prefer to focus on programming, and most managers
                prefer to focus primarily on higher-level business issues. I'm
                an engineer who can bridge the gap. My background in Philosophy,
                Law, and debate give me excellent tools to contextualize
                technology and create meaningful experiences.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <Carousel />
    </Container>
  </div>
);

export default IndexPage;
