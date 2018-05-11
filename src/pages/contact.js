import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
`;

const ConsistentSpan = styled.span`
  display: inline-block;
  min-width: 5em;
`;

export default () => (
  <StyledDiv>
    <h1>Contact</h1>
    <p>
      <ConsistentSpan>By email:</ConsistentSpan>{" "}
      <a href="mailto:kyle@peacockweb.net">kyle@peacockweb.net</a>
      <br /> <ConsistentSpan>Linkedin:</ConsistentSpan>{" "}
      <a href="https://linkedin.com/in/krpeacock">
        https://linkedin.com/in/krpeacock
      </a>
      <br />
      <ConsistentSpan>Github:</ConsistentSpan>{" "}
      <a href="https://github.com/krpeacock">https://github.com/krpeacock</a>
      <hr />
      <span>If you're interested in working with me:</span>
      <ConsistentSpan>Check out my resume - </ConsistentSpan>{" "}
      <a
        href="https://docs.google.com/document/d/17bodJJkgD76tYKhIOg-cEJlXrRGoOWpcKzUobClP5y8/edit?usp=sharing"
        _target="blank"
      >
        Kyle Peacock Resume
      </a>
    </p>
  </StyledDiv>
);
