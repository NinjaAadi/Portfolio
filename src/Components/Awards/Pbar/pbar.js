import React, { Fragment } from "react";
import {useEffect} from 'react';
import classes from "./pbar.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Pbar = ({ done, skill }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes["skill"]} data-aos="fade-down">
      <CircularProgressbar
        styles={buildStyles({
          // Rotation of path and trail, in number of turns (0-1)
          rotation: 0.25,

          // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
          strokeLinecap: "butt",

          // Text size
          textSize: "16px",

          // How long animation takes to go from one percentage to another, in seconds
          pathTransitionDuration: 0.5,

          // Can specify path transition in more detail, or remove it entirely
          // pathTransition: 'none',

          // Colors
          pathColor: `rgba(239, 79, 79, ${done / 100})`,
          textColor: "#000000",
          trailColor: "#f5f4f4",
          backgroundColor: "#3e98c7",
        })}
        style={{ height: "100px" }}
        value={done}
        text={`${done}%`}
      />
      <h3 style={{ color: "#1D428A" }}>{skill}</h3>
    </div>
  );
};

export default Pbar;
