import classes from "./Card.module.css";
import React, { Fragment, useEffect, useState } from "react";
import Popup from "./Popup/Popup";
import { setproject } from "../../../../../Actions/project";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import project from "../../../../../assets/project.svg";

const Card = (props) => {
  //project is in props.project
  const [toggle, settogle] = useState(false);

  const toggler = async () => {
    await props.setproject(props.project);
    if (toggle === false) {
      settogle(true);
    } else {
      settogle(false);
    }
  };

  return (
    <Fragment>
      <div className={classes["card"]}>
        <div className={classes["head"]}>
          <h1>{props.project.Name}</h1>
        </div>
        <button className={classes["button"]} onClick={(e) => toggler()}>
          View
        </button>
        <div className={classes["code"]}>
          <i class="fas fa-laptop-code"></i>
        </div>
      </div>
      {toggle === true ? <Popup click={toggler} /> : <Fragment></Fragment>}
    </Fragment>
  );
};

Card.propTypes = {
  setproject: PropTypes.func.isRequired,
};

export default connect(null, { setproject })(Card);
