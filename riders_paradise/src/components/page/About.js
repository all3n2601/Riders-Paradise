import React from "react";
import { Link } from "react-router-dom";
import imgmani from "../../assets/devs/manigandan.jpg";
import "../../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function About() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="main-container">
      <h1></h1>
      <Carousel responsive={responsive}>
        <div className="card-about">
          <div className="img-container"><img src="" alt="" className="img-about"></img></div>
          <h2 className="h-about">Allen Febi</h2>
          <p className="p-about"></p>
        </div>
        <div className="card-about">
          <div className="img-container"><img src="" alt="" className="img-about"></img></div><img src="" alt="" className="img-about"></img>
          <h2 className="h-about">Rahul Palanivel</h2>
          <p className="p-about"></p>
        </div>
        <div className="card-about">
          <div className="img-container"><img src={imgmani} alt="" className="img-about"></img></div>
          <h2 className="h-about">Manigandan Nachiappan</h2>
          <p className="p-about">Greetings! I'm Manigandan Nachiappan, the creative force and dedicated professional behind Riders Paradise. With a passion for technology, a keen eye for design, and a commitment to delivering exceptional results.</p>
        </div>
        <div className="card-about">
          <div className="img-container"><img src="" alt="" className="img-about"></img></div>
          <h2 className="h-about">Varun Venkatesh</h2>
          <p className="p-about"></p>
        </div>
        <div className="card-about">
          <div className="img-container"><img src="" alt="" className="img-about"></img></div>
          <h2 className="h-about">Sri Vishnu</h2>
          <p className="p-about"></p>
        </div>
      </Carousel>
    </div>
  );
}

export default About;
