import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/devs/manigandan.jpg";
import "../../styles/About.css";

function About() {
  return (
    <div className="main-about">
      <div className="grid1">
        <div className="e1">
          <div className="imgcontainer">
            <img className="dev-image" src={img} alt="Avatar" />
          </div>
          <div className="maincontainer">
            Allen Febi <br />
          </div>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/manigandan-2003"
          >
            Github
          </Link>{" "}
          <br />
          <Link
            className="link"
            target="_blank"
            to="https://www.linkedin.com/in/manigandan-n"
          >
            LinkedIn
          </Link>
        </div>
        <div className="e2">
          <div className="imgcontainer">
            <img className="dev-image" src={img} alt="Avatar" />
          </div>
          <div className="maincontainer">
            Rahul Palanivel <br />
          </div>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/manigandan-2003"
          >
            Github
          </Link>{" "}
          <br />
          <Link
            className="link"
            target="_blank"
            to="https://www.linkedin.com/in/manigandan-n"
          >
            LinkedIn
          </Link>
        </div>
        <div className="e3">
          <div className="imgcontainer">
            <img className="dev-image" src={img} alt="Avatar" />
          </div>
          <div className="maincontainer">
            Manigandan Nachiappan <br />
          </div>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/manigandan-2003"
          >
            Github
          </Link>{" "}
          <br />
          <Link
            className="link"
            target="_blank"
            to="https://www.linkedin.com/in/manigandan-n"
          >
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="grid2">
        <div className="e4">
          <div className="imgcontainer">
            <img className="dev-image" src={img} alt="Avatar" />
          </div>
          <div className="maincontainer">
            Varun Venkatesh <br />
          </div>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/manigandan-2003"
          >
            Github
          </Link>{" "}
          <br />
          <Link
            className="link"
            target="_blank"
            to="https://www.linkedin.com/in/manigandan-n"
          >
            LinkedIn
          </Link>
        </div>
        <div className="e5">
          <div className="imgcontainer">
            <img className="dev-image" src={img} alt="Avatar" />
          </div>
          <div className="maincontainer">
            Sri Vishnu <br />
          </div>
          <Link
            className="link"
            target="_blank"
            to="https://github.com/manigandan-2003"
          >
            Github
          </Link>{" "}
          <br />
          <Link
            className="link"
            target="_blank"
            to="https://www.linkedin.com/in/manigandan-n"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
