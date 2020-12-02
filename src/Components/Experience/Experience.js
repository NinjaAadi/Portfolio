import { Fragment } from "react";
import classes from "./experience.module.css";
import pic from "../../assets/experience.svg";
const Experience = () => {
  return (
    <div className={classes["background"]}>
      <img src={pic} className={classes["img"]} />
      <h1 className={classes["header"]}>Experience</h1>
      <div className={classes["about"]}>
        <ul>
          <li className={classes["list"]}>October 2020 - Till Date</li>
          <p className={classes["para"]}>
            {" "}
             Chegg Problem Solver and Editorial Writer
          </p>
        </ul>
        <ul>
          <li className={classes["list"]}>August 2019 - Till Date</li>
          <p className={classes["para"]}>  Web Developer at SMIT</p>
          <p className={classes["para"]}>
             Developed and hosted a blogging website for the college
          </p>
          <p className={classes["para"]}>
             Developed a departmental website for the ECE department
          </p>
        </ul>
      </div>
    </div>
  );
};
export default Experience;
