import React from "react";
import Link from "gatsby-link";
import glamorous from "glamorous";
import Container from "../../components/Container";
import PowerStrip from "./power-strip";

const Banner = glamorous.div({
  width: `100vw`,
  height: "20em",
  backgroundImage: "url(/static/blog_banner.jpg)"
});

const Blog = () => (
  <div>
    <Banner />
    <PowerStrip />
  </div>
);

export default Blog;
