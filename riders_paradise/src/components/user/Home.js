import React from "react";
import "../../styles/Home.css";
import img from "../../assets/bike.jpg";
import video from "../../assets/video.mp4";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

function Home() {
  return (
    <div class="body-homepage">
      <div className="video-container">
        <video src={video} autoPlay loop />
        {/* <div className="btn-home">
          <button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Get Started
          </button>
        </div> */}
        <h1 className="h-home">Adventure Awaits</h1>
        <p className="p-home">What are you waiting for??</p>
      </div>
      <div className="cards-home">
        {/* <ul className="carditems-home">
        <Link className="link-home">
          <figure className="figure-home">
            <img src={img} alt="" className="img-home"/>
          </figure>
        </Link>

        <Link className="link-home">
          <figure className="figure-home">
            <img src={img} alt="" className="img-home"/>
          </figure>
        </Link>
        </ul>

        <ul className="carditems-home">
        <Link className="link-home">
          <figure className="figure-home">
            <img src={img} alt="" className="img-home"/>
          </figure>
        </Link>

        <Link className="link-home">
          <figure className="figure-home">
            <img src={img} alt="" className="img-home"/>
          </figure>
        </Link>
        </ul> */}
      </div>
    </div>
  );
}

export default Home;
