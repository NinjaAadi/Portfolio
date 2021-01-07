import React, { Fragment } from "react";
import classes from "./projects.module.css";
import back from "../../assets/back.svg";
import bulb from "../../assets/bulb.svg";

const Project = () => {
  return (
    <Fragment>
      <div
        className={classes["background"]}
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className={classes["head"]}>
          <h1>
            My works...{" "}
            <i class="fas fa-code" style={{ color: "#ff7b54" }}></i>
          </h1>
        </div>
        <img className={classes["bulb"]} src={bulb} alt="bulb" />
      </div>
    </Fragment>
  );
};
export default Project;
