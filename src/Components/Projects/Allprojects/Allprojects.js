import React, { useState, Fragment } from "react";
import classes from "./allprojects.module.css";
import ProjectCard from "./ProjectCard/ProjectCard";

const Allprojects = () => {
  const [styles, setstyles] = useState({
    All: { backgroundColor: "#007FFF", color: "white", borderRadius: "5px" },
    React: {},
    Node: {},
    PHP: {},
  });
  const [skill, setskill] = useState("All");
  const mystyle = {
    backgroundColor: "#007FFF",
    color: "white",
    borderRadius: "5px",
  };
  const onClick = (e) => {
    setstyles({
      All: {},
      React: {},
      Node: {},
      PHP: {},
      [e.target.name]: mystyle,
    });
    setskill(e.target.name);
  };
  return (
    <Fragment>
      <div className={classes["body"]}>
        <div className={classes["menu"]}>
          <button
            className={classes["btn"]}
            style={styles.All}
            name="All"
            onClick={(e) => onClick(e)}
          >
            All
          </button>
          <button
            className={classes["btn"]}
            style={styles.React}
            name="React"
            onClick={(e) => onClick(e)}
          >
            React
          </button>
          <button
            className={classes["btn"]}
            style={styles.Node}
            name="Node"
            onClick={(e) => onClick(e)}
          >
            Node
          </button>
          <button
            className={classes["btn"]}
            style={styles.PHP}
            name="PHP"
            onClick={(e) => onClick(e)}
          >
            PHP
          </button>
        </div>
        <ProjectCard skill={skill} />
      </div>
    </Fragment>
  );
};
export default Allprojects;
