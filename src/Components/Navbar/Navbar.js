import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import resume from "../../assets/resume_aadityapal.pdf";
import logo1 from "../../assets/AP5.png";
const Navbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let height = window.scrollY;
      const nav = document.getElementById("nav");
      if (height > 20) {
        nav.style.backgroundColor = "#007FFF";
      } else {
        nav.style.backgroundColor = "#3457D5";
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
    if (window.innerWidth <= 1000) {
      setcond(false);
      document.getElementById("ancr").style.display = "none";
    }
  };
  return (
    <div id="nav" className={classes["navbar"]}>
      <div className={classes["name"]}>
        <img
          style={{ width: "50px", height: "30px", marginTop: "15px" }}
          src={logo1}
          alt="logo"
        />
      </div>
      <div id="ancr" className={classes["btns"]}>
        <Link to="/" className={classes["anc"]} onClick={(e) => clicked(e)}>
          Home
        </Link>
        <Link
          to="/projects"
          className={classes["anc"]}
          onClick={(e) => clicked(e)}
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className={classes["anc"]}
          onClick={(e) => clicked(e)}
        >
          Skills
        </Link>
        <a
          target="_blank"
          href={resume}
          rel="noreferrer"
          className={classes["anc"]}
        >
          Resume
        </a>
      </div>
      {btn}
    </div>
  );
};
export default Navbar;
