import React, { Fragment, useEffect } from "react";
import classes from "./Thirdback.module.css";
import Aos from "aos";
import logo1 from "../../../assets/AP5.png";
import "aos/dist/aos.css";

const Thirdback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <div className={classes["back"]}>
        <div className={classes["img"]}>
          <img className={classes["image"]} src={logo1} alt="logo" />
        </div>
        <div className={classes["head2"]}>
          <h1 data-aos="fade-up">
            Living, learning, & leveling up
            <br /> one day at a time.
          </h1>
        </div>

        <div className={classes["icon"]}>
          <a
            href="https://app.netlify.com/teams/ninjaaadi/builds/600277e577ecbc0007cd2e0d"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://app.netlify.com/teams/ninjaaadi/builds/600277e577ecbc0007cd2e0d"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            href="https://app.netlify.com/teams/ninjaaadi/builds/600277e577ecbc0007cd2e0d"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="fab fa-instagram"></i>
          </a>
          <a
            href="https://app.netlify.com/teams/ninjaaadi/builds/600277e577ecbc0007cd2e0d"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <span
              className="iconify"
              data-icon="simple-icons:codechef"
              data-inline="false"
              style={{ height: "auto" }}
            ></span>
          </a>
          <a
            href="https://app.netlify.com/teams/ninjaaadi/builds/600277e577ecbc0007cd2e0d"
            target="_blank"
            rel="noreferrer"
            className={classes["anc"]}
          >
            <i class="far fa-envelope"></i>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Thirdback;
