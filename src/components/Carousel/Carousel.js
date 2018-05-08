import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./carousel.css";

const Slide = styled.div``;

const SlideImg = styled.img`
  height: 100%;
  max-height: 600px;
`;

const Icon = styled.img`
  z-index: 2;
  width: 30px;
  height: 30px;
`;

const settings = {
  autoplay: false,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: <Icon src="/static/icons/regular/arrow-alt-square-left.svg" />,
  nextArrow: <Icon src="/static/icons/regular/arrow-alt-square-right.svg" />
};

const CarouselExport = () => (
  <Slider {...settings}>
    <Slide>
      <img src="/static/audiscreenshot.png" />
      <p>Audiusa website and platform upgrades</p>
    </Slide>
    <Slide>
      <img src="/static/gettingcollegeready.png" />
      <p>Single-page React application for Wells Fargo</p>
    </Slide>
  </Slider>
);

export default CarouselExport;
