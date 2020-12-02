import classes from "./skills.module.css";
import img from "../../assets/skills.svg";
import {useEffect} from 'react';
import Pbar from "./Pbar/pbar";
const Skills = () => {
  let skill = ["HTML","CSS","JAVASCRIPT"];

  return (
    <div className={classes["background"]}>
      <h1 className={classes["header"]}>Skills</h1>
      <img className={classes["college"]} src={img} />

    </div>
  );
};
export default Skills;
