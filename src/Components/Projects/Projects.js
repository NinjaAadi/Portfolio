import React, { Fragment, useEffect, useState } from "react";
import classes from "./projects.module.css";
import proj from "../../assets/proj.svg";
import Carousel from "./Carousel/Carousel";
import Allprojects from "./Allprojects/Allprojects";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, enable: "mobile" });
  }, []);

  return (
    <Fragment>
      <div className={classes["background"]}>
        <div className={classes["head"]}>
          <h1 data-aos="fade-in">
            Recent projects{" "}
            <i class="fas fa-project-diagram" style={{ color: "#ff7b54" }}></i>
          </h1>
        </div>
        <img className={classes["bulb"]} src={proj} alt="bulb" />
      </div>
      <Carousel />
      <br />
      <div className={classes["hr"]}></div>
      <Allprojects />
    </Fragment>
  );
};
export default Project;
