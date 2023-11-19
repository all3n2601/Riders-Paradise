import React from "react";
import "../../styles/Home.css";
import "../../assets/video.mp4";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div class="body-homepage">
      <video autoPlay loop>
        <source src="../../assets/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Home;
