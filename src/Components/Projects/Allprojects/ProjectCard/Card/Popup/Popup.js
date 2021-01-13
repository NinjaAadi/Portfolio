import React, { useEffect } from "react";
import classes from "./Popup.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";

const Popup = (props) => {
  const project = props.project.Project;
  return (
    <div className={classes["popup"]}>
      <div className={classes["project"]}>
        <h1 onClick={props.click} className={classes["cross"]}>
          <i class="far fa-times-circle"></i>{" "}
        </h1>
        <div className={classes["name"]}>
          <h1>{project.Name}</h1>
        </div>
        <div className={classes["heading"]}>
          <h2>{project.Description}</h2>
        </div>
        <div className={classes["carousel"]}>
          <Carousel itemsToShow={2}>
            <div className={classes["item"]}>1</div>
            <div className={classes["item"]}> 2</div>
            <div className={classes["item"]}>3</div>
            <div className={classes["item"]}>4</div>
            <div className={classes["item"]}>5</div>
            <div className={classes["item"]}>6</div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  project: state.Project,
});
Popup.propTypes = {
  project: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, {})(Popup);
