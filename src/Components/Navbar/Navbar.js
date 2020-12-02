import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let height = window.scrollY;
      const nav = document.getElementById("nav");
      if (window.innerWidth > 1000) {
        if (height > 20) {
          nav.style.backgroundColor = "#393e46";
        } else {
          nav.style.backgroundColor = "#222831";
        }
      }
    });
  }, []);
  const [cond, setcond] = useState(false);
  let btn;
  const click = (e) => {
    e.preventDefault();
    if (cond === true) {
      setcond(false);
      document.getElementById("ancr").style.display = "none";
    } else {
      setcond(true);
      document.getElementById("ancr").style.display = "inline-block";
    }
  };

  if (cond === false) {
    btn = (
      <button onClick={(e) => click(e)} className={classes["button"]}>
        <div className={classes["l1"]}></div>
        <div className={classes["l2"]}></div>
        <div className={classes["l3"]}></div>
      </button>
    );
  } else {
    btn = (
      <button onClick={(e) => click(e)} className={classes["button"]}>
        <div className={classes["l4"]}></div>
        <div className={classes["l5"]}></div>
        <div className={classes["l6"]}></div>
      </button>
    );
  }
  const clicked = (e) => {
    if(window.innerWidth <= 1000){
            setcond(false);
            document.getElementById("ancr").style.display = "none";
    }
  }
  return (
    <div id="nav" className={classes["navbar"]}>
      <div className={classes["name"]}>
        <h3>Me.Portfolio</h3>
      </div>
      <div id="ancr" className={classes["btns"]}>
        <Link to="/" className={classes["anc"]} onClick={e => clicked(e)}>
          Home
        </Link>
        <Link to="/experience" className={classes["anc"]} onClick={e => clicked(e)}>
          Experience
        </Link>
        <Link to="education" className={classes["anc"]} onClick={e => clicked(e)}>
          Education
        </Link>
        <Link to="/projects" className={classes["anc"]} onClick={e => clicked(e)}>
          Projects
        </Link>
        <Link to="/skills" className={classes["anc"]} onClick={e => clicked(e)}>
          Skills
        </Link>
        <Link to="/resume" className={classes["anc"]} onClick={e => clicked(e)}>
          Resume
        </Link>
      </div>
      {btn}
    </div>
  );
};
export default Navbar;
