import React, { Fragment } from "react";
import classes from "./ProjectCard.module.css";
import Card from "./Card/Card";
import Projects from "../../../../project.json";

const ProjectCard = ({ skill }) => {
  if (skill === "All") {
    return (
      <Fragment>
        <div className={classes["project"]}>
          {Projects.map((item) => {
            return <Card project={item} />;
          })}
        </div>
      </Fragment>
    );
  } else if (skill === "React") {
    return (
      <Fragment>
        <div className={classes["project"]}>
          {Projects.map((item) => {
            if (item.Tech.indexOf("React") >= 0) {
              return <Card project={item} />;
            }
          })}
        </div>
      </Fragment>
    );
  } else if (skill === "Node") {
    return (
      <Fragment>
        <div className={classes["project"]}>
          {Projects.map((item) => {
            if (item.Tech.indexOf("Node") >= 0) {
              return <Card project={item} />;
            }
          })}
        </div>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <div className={classes["project"]}>
          {Projects.map((item) => {
            if (item.Tech.indexOf("PHP") >= 0) {
              return <Card project={item} />;
            }
          })}
        </div>
      </Fragment>
    );
  }
};
export default ProjectCard;
