import React, { Component } from "react";
import Link from "gatsby-link";
import Container from "../../components/Container";
import glamorous from "glamorous";

const TitleAndDate = glamorous.div({
  borderBottom: "1px solid #e6e9eb",
  paddingBottom: "0.2em",
  marginBottom: "1em",
  height: "auto"
});

const BlogHeader = glamorous.h3({
  marginBottom: 0,
  color: "#415161",
  textDecoration: "none",
  ":hover": {
    color: "#6c8095"
  }
});

const Date = glamorous.p({
  fontSize: "14px",
  marginBottom: 0
});

const Description = glamorous.p({
  textAlign: "center"
});

const StyledImage = glamorous.img({
  margin: "auto",
  marginBottom: 0
});

const Column = glamorous.div({
  display: "flex",
  flexDirection: "column"
});

const BlogImage = ({ src, children }) => (
  <Column>
    <StyledImage src={src} />
    <Description>{children}</Description>
  </Column>
);

const PowerStripPage = () => (
  <div>
    <Container>
      <TitleAndDate>
        <Link to="/blog/power-strip" style={{ textDecoration: "none" }}>
          <BlogHeader>Power Strip</BlogHeader>
        </Link>
        <Date>7/19/2016</Date>
      </TitleAndDate>
      <p>
        It's been a couple months coming now, but I'm nearing version 1.0 of my
        power strip! You may be asking a few questions now, like "what power
        strip?" Well, after feeling frustrated about having to walk across the
        room to turn off a lamp with an awkward off-switch, I decided to
        over-engineer a solution.{" "}
      </p>
      <p>
        Starting with a power strip I found on Amazon, I began by taking it
        apart and looking at what I had to work with.{" "}
      </p>
      <BlogImage src="/static/power-strip-guts.jpg">
        First look inside the strip
      </BlogImage>
      <p>
        Fortunately, this strip happened to leave a lot of space to work with. I
        began by disconnecting the physical relays. I had a series of 8
        electronically controlled relays, which I wired the outlets to after
        making sure I was properly handling mains-level current. With a few
        rudimentary python scripts in place, I had a working prototype! It
        looked like this:
      </p>
      <BlogImage src="/static/strip-prototype.jpg">
        Yes, the rubber band was necessary
      </BlogImage>
      <p>
        With that in place, I created a rudimentary Node server with a web view
        and used the strip that way for about a month. The server knew how to
        call ten python scripts, which would set the state of 5 GPIO pins to
        control the outlets. My webpage was incredibly minimalistic, and I only
        wrote buttons for the two outlets I was regularly using: a lamp and a
        space heater.{" "}
      </p>
      <p>
        It wasn't until June that I picked the project back up for some major
        revisions. Since I knew that needed to present a final project for
        Galvanize, I decided to take everything to the next level. I wanted a
        more intelligent server and view, and a much tidier and more compact
        piece of hardware. For the server, I decided to continue using Node.js
        with Express, and I decided that React.js had a philosophy of state that
        would suit this project particularly well.{" "}
      </p>
    </Container>
  </div>
);

export default PowerStripPage;
