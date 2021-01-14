import React, { Fragment, useEffect, useState } from "react";
import classes from "./projects.module.css";
import back from "../../assets/back.svg";
import bulb from "../../assets/bulb.svg";
import bulboff from "../../assets/bulboff.svg";
import Carousel from "./Carousel/Carousel";
import Allprojects from "./Allprojects/Allprojects";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, enable: "mobile" });
  }, []);
  const [img, setimg] = useState({
    img: bulb,
    on: true,
  });
  const toggle = () => {
    if (img.on === true) {
      setimg({
        ...img,
        img: bulboff,
        on: false,
      });
    } else {
      setimg({
        ...img,
        img: bulb,
        on: true,
      });
    }
  };
  return (
    <Fragment>
      <div
        className={classes["background"]}
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className={classes["head"]}>
          <h1 data-aos="fade-in">
            <i class="fas fa-code" style={{ color: "#ff7b54" }}></i> My works{" "}
            <i class="fas fa-code" style={{ color: "#ff7b54" }}></i>
          </h1>
        </div>
        <p onClick={(e) => toggle(e)} className={classes["p"]}></p>
        <img
          onClick={(e) => toggle(e)}
          className={classes["bulb"]}
          src={img.img}
          alt="bulb"
        />
      </div>
      <Carousel />
      <Allprojects />
    </Fragment>
  );
};
export default Project;
