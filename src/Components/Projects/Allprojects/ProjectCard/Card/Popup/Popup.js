import React, { useEffect } from "react";
import classes from "./Popup.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";

const Popup = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
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
          <Carousel itemsToShow={3} breakPoints={breakPoints}>
            <Item>1</Item>
            <Item>1</Item>
            <Item>1</Item>
            <Item>1</Item>
            <Item>1</Item>
            <Item>1</Item>
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
