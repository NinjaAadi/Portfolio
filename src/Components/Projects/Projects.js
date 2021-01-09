import React, { Fragment, useEffect } from "react";
import classes from "./projects.module.css";
import back from "../../assets/back.svg";
import bulb from "../../assets/bulb.svg";
import Carousel from "./Carousel/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, enable: "mobile" });
  }, []);
  return (
    <Fragment>
      <div
        className={classes["background"]}
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className={classes["head"]}>
          <h1 data-aos="fade-in">
            My works <i class="fas fa-code" style={{ color: "#ff7b54" }}></i>
          </h1>
        </div>
        <img className={classes["bulb"]} src={bulb} alt="bulb" />
      </div>
      <Carousel />
    </Fragment>
  );
};
export default Project;
