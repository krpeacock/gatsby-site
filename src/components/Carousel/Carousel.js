import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./carousel.css";

const Slide = styled.div`
  max-height: 600px;
  height: 100%;
`;

const SlideImg = styled.img`
  height: 100%;
  max-height: 600px;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const CarouselExport = () => (
  <Slider {...settings}>
    <Slide>
      <img src="/static/audiscreenshot.png" />
      <p className="legend">Audiusa website and platform upgrades</p>
    </Slide>
    <Slide>
      <img src="/static/gettingcollegeready.png" />
    </Slide>
  </Slider>
);

export default CarouselExport;
