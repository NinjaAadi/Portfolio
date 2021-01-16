import React, { Fragment, useEffect } from "react";
import classes from "./Secondback.module.css";
import profile from "../../../assets/profile.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Secondback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <div className={classes["body"]}>
        <div className={classes["hi"]}>
          <h1>
            Hii, I'm{" "}
            <p
            className={classes["name"]}
            >
              Aaditya Pal
            </p>
            . Nice to meet you!
          </h1>
        </div>
        <div className={classes["about"]}>
          <h2>
            Hi, I am currently 20 years old. I am a
            full stack web developer.I also practice Competitive Programming.I
            am currently a student. My hobbies include novels, driving, music
            and obviously programming.
          </h2>
        </div>
      </div>
    </Fragment>
  );
};

export default Secondback;
