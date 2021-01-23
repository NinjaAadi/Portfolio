import classes from "./skills.module.css";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Pbar from "./Pbar/pbar";
import React from "../../assets/React.svg";
import Node from "../../assets/Node.svg";
import PHP from "../../assets/PHP.svg";
import MongoDB from "../../assets/MongoDB.svg";
import Express from "../../assets/Express.svg";
import Jquery from "../../assets/Jquery.png";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import Javascript from "../../assets/Javascript.svg";
import MySQL from "../../assets/MySQL.svg";
import Redux from "../../assets/Redux.svg";
import C from "../../assets/C.svg";
import Cpp from "../../assets/Cpp.svg";
import Python from "../../assets/Python.svg";
import Skill from "../../assets/skill.svg";

const Skills = () => {
    useEffect(() => {
      Aos.init({ duration: 1000 });
    }, []);
  const [obj, setobj] = useState([
    { skill: "HTML", percent: "85" },
    { skill: "Css", percent: "80" },
    { skill: "Javascript", percent: "75" },
    { skill: "PHP", percent: "60" },
    { skill: "Cpp", percent: "85" },
    { skill: "C", percent: "80" },
    { skill: "React", percent: "80" },
    { skill: "Node", percent: "70" },
    { skill: "Python", percent: "50" },
    { skill: "MySQL", percent: "60" },
    { skill: "MongoDB", percent: "65" },
    { skill: "Bootstrap", percent: "70" },
  ]);

  return (
    <Fragment>
      <div className={classes["back"]}>
        <div className={classes["head"]}>
          <h1 data-aos="fade-in">
            My Tech Stack{" "}
            <i class="fas fa-code" style={{ color: "#ff7b54" }}></i>
          </h1>
        </div>
        <img className={classes["skillsi"]} src={Skill} alt="bulb" />
      </div>
      <div className={classes["background"]}>
        <div className={classes["skill"]}>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${React})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Node})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${HTML})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${CSS})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Javascript})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${MongoDB})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${PHP})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Express})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Jquery})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${MySQL})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Redux})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${C})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Cpp})` }}
          ></div>
          <div
            className={classes["icon"]}
            style={{ backgroundImage: `url(${Python})` }}
          ></div>
        </div>
      </div>
      <hr
        style={{
          height: "auto",
          marginBottom: "4rem",
          color: "#e8eae6",
          opacity: "0.3",
        }}
      />
      <div className={classes["measure"]}>
        <h3 data-aos="fade-up">
          How good am I
          <i class="fas fa-question" style={{ color: "#4169E1" }}></i>
        </h3>
      </div>
      <div className={classes["percent"]}>
        {obj.map((item) => {
          return <Pbar skill={item.skill} done={item.percent} />;
        })}
      </div>
    </Fragment>
  );
};
export default Skills;
