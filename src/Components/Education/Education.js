import React from "react";
import classes from "./education.module.css";
import img1 from "../../assets/collegelogo.png";
import img2 from "../../assets/schoollogo.jpg";
const Education = () => {
  return (
    <div className={classes["background"]}>
      <h1 className={classes["header"]}>Education</h1>
      <div className={classes["img1"]}>
        <img className={classes["college"]} src={img1} />
      </div>
      <h1 className={classes["head"]}>
        Sikkim Manipal Institute Of Technology
      </h1>
      <li className={classes["para"]}>Enrolled in B.Tech (CSE)</li>
      <li className={classes["para"]}>Cgpa : 8.9</li>
      <li className={classes["para"]}>2019-2023</li>
      <li className={classes["para"]}>Currently in Second Year</li>
      <br />
      <br />
      <br />
      <div className={classes["img1"]}>
        <img className={classes["college"]} src={img2} />
      </div>
      <h1 className={classes["head"]}>Surenderanath Centenary School</h1>
      <li className={classes["para"]}>Class 12 (PCM)</li>
      <li className={classes["para"]}>Cgpa : 9.26</li>
      <li className={classes["para"]}>2018-2019</li>
      
    </div>
  );
};
export default Education;
