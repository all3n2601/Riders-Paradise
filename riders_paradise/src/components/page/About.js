import React from "react";
import { Link } from "react-router-dom";
import imgmani from "../../assets/devs/manigandan.jpg";
import imgallen from "../../assets/devs/allen.jpg";
import imgrahul from "../../assets/devs/rahul.jpg";
import imgvishnu from "../../assets/devs/vishnu.jpg";
import imgvarun from "../../assets/devs/varun.jpg";
import "../../styles/About.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";


function About() {

  return (
    <div className="main-container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    <div>
      <div class="page-about shadow">
        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={imgallen}
                    alt="Allen"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <Link className="Link" to="https://www.linkedin.com/in/all3n-f3bi/">
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link className="Link" to="https://github.com/all3n2601">
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2 className="h-about">Allen Febi</h2>
                  <p className="p-about">Vellore Institute of Technology Amaravati</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                      Hi, I'm Allen Febi, a passionate MERN stack developer with a flair for crafting dynamic and user-centric web solutions. Armed with expertise in MongoDB, Express.js, React, and Node.js, I bring innovation to life through clean and efficient code. With a keen eye for detail and a commitment to delivering excellence, I thrive on turning ideas into seamless, interactive web experiences. Let's collaborate and transform your digital vision into reality!
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={imgrahul}
                    alt="Rahul"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <Link className="Link" to="https://www.linkedin.com/in/rahul-palanivel-629464279/">
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link className="Link" to="https://github.com/rahulpalanivel">
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2 className="h-about">Rahul Palanivel</h2>
                  <p className="p-about">Vellore Institute of Technology Amaravati</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                      Meet Rahul Palanivel, the visionary developer behind our MERN stack projects. With a passion for crafting seamless digital experiences, Rahul brings expertise in MongoDB, Express.js, React, and Node.js to the table. With a keen eye for detail and a commitment to innovation, Rahul transforms ideas into reality, creating dynamic and user-centric web applications. Join us on a journey of innovation with Rahul Palanivel, where every project reflects a commitment to excellence and cutting-edge technology.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={imgmani}
                    alt="Mani"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <Link className="Link" to="https://www.linkedin.com/in/manigandan-n">
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link className="Link" to="https://github.com/manigandan-2003">
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2 className="h-about">Manigandan Nachiappan</h2>
                  <p className="p-about">Vellore Institute of Technology Amaravati</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                      Manigandan Nachiappan, a dedicated MERN stack developer, brings a wealth of expertise in crafting dynamic and efficient web applications. With a passion for innovative solutions, Manigandan is committed to delivering high-quality software that seamlessly integrates MongoDB, Express.js, React, and Node.js. His meticulous attention to detail and collaborative approach make him a valuable asset in creating engaging and user-centric digital experiences. Manigandan Nachiappan: Transforming ideas into reality, one line of code at a time.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={imgvishnu}
                    alt="Vishnu"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <Link className="Link" to="https://www.linkedin.com/in/sree-vishnu-v-910b69231/">
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link className="Link" to="https://github.com/Sreevishnu1924">
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2 className="h-about">Sri Vishnu</h2>
                  <p className="p-about">Vellore Institute of Technology Amaravati</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                      Hello, I'm Sri Vishnu, the driving force behind our MERN projects. With a passion for crafting seamless digital experiences, I bring expertise in MongoDB, Express.js, React, and Node.js to the table. Committed to innovation and user-centric design, I thrive on transforming ideas into robust and scalable solutions. Let's embark on a journey of creativity and technological excellence together!
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={imgvarun}
                    alt="Varun"
                    style={{ width: "65%", borderRadius: "100%" }}
                  />
                  <br />
                  <Link className="Link" to="https://www.linkedin.com/in/varun-venkatesh-2015b3219?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                    <i className="fa fa-linkedin" />
                  </Link>
                  <Link className="Link" to="https://github.com/varunvenkat22">
                    <i className="fa fa-github" />
                  </Link>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2 className="h-about">Varun Venkatesh</h2>
                  <p className="p-about">Vellore Institute of Technology Amaravati</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                      Hello, I'm Varun Venkatesh, the driving force behind our MERN stack endeavors. With a passion for crafting seamless digital experiences, I bring a blend of creativity and technical acumen to every project. My journey in web development is fueled by a commitment to innovation, and I thrive on transforming ideas into elegant, functional solutions. As a dedicated professional, I specialize in leveraging MongoDB, Express.js, React, and Node.js to create robust and dynamic web applications. Let's embark on a journey of innovation together, where your digital aspirations meet my expertise.
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>

        
      </div>
    </div>

    </div>
  );
}

export default About;
