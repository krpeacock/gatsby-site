import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./carousel.css";

const Slide = styled.div`
  text-align: center;
  padding: 2em;
  p {
    position: relative;
    top: -3.4em;
    padding: 1em;
    width: 100%;
    background-color: black;
    opacity: 0.8;
    color: white;
  }
`;

const SlideImg = styled.img`
  max-height: 600px;
  margin: auto;
`;

const Icon = styled.img`
  z-index: 2;
  width: 30px;
  height: 30px;
`;

const settings = {
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: <Icon src="/static/icons/regular/arrow-alt-square-left.svg" />,
  nextArrow: <Icon src="/static/icons/regular/arrow-alt-square-right.svg" />
};

const CarouselExport = () => (
  <Slider {...settings}>
    <Slide>
      <SlideImg src="/static/audiscreenshot.png" />
      <p>Audiusa website and platform upgrades</p>
    </Slide>
    <Slide>
      <SlideImg src="/static/gettingcollegeready.png" />
      <p>Single-page React application for Wells Fargo</p>
    </Slide>
    <Slide>
      <SlideImg src="/static/bach.png" />
      <p>Webmaster for the sf bach choir</p>
    </Slide>
  </Slider>
);

export default CarouselExport;
