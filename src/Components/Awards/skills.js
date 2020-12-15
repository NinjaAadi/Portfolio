import classes from "./skills.module.css";
import img from "../../assets/skills.svg";
import {useEffect,useState} from 'react';
import Pbar from "./Pbar/pbar";
const Skills = () => {
  const [obj, setobj] = useState([
    { skill: "HTML", percent: "85" },
    { skill: "Css", percent: "80" },
    { skill: "Javascript", percent: "75" },
    { skill: "PHP", percent: "60" },
    { skill: "C++", percent: "85" },
    { skill: "C", percent: "80" },
    { skill: "React", percent: "80" },
    { skill: "Node", percent: "70" },
    { skill: "Python", percent: "50" },
    { skill: "MySQL", percent: "60" },
    { skill: "MongoDB", percent: "65" },
    { skill: "Bootstrap", percent: "70" },
  ]);
  return (
    <div className={classes["background"]}>
      <h1 className={classes["header"]}>Skills</h1>
      <img className={classes["college"]} src={img} />
      {
        obj.map((i) => {
          return <Pbar skill={i.skill} done={i.percent}/>
        })
      }
    </div>
  );
};
export default Skills;
