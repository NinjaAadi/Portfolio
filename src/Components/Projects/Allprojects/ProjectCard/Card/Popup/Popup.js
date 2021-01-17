import classes from "./Popup.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./style.scoped.css";
import React from "../../../../../../assets/React.svg";
import Node from "../../../../../../assets/Node.svg";
import PHP from "../../../../../../assets/PHP.svg";
import MongoDB from "../../../../../../assets/MongoDB.svg";
import Express from "../../../../../../assets/Express.svg";
import Jquery from "../../../../../../assets/Jquery.png";
import HTML from "../../../../../../assets/HTML.svg";
import CSS from "../../../../../../assets/CSS.svg";
import Javascript from "../../../../../../assets/Javascript.svg";
import MySQL from "../../../../../../assets/MySQL.svg";
import Redux from "../../../../../../assets/Redux.svg";
import Carousel, { consts } from "react-elastic-carousel";

const Popup = (props) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const Image = {
    React: React,
    Node: Node,
    PHP: PHP,
    MongoDB: MongoDB,
    Express: Express,
    Jquery: Jquery,
    HTML: HTML,
    CSS: CSS,
    Javascript: Javascript,
    MySQL: MySQL,
    Redux: Redux,
  };
  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <i class="fas fa-chevron-left"></i>
      ) : (
        <i class="fas fa-chevron-right"></i>
      );
    return (
      <button className={classes["arrow"]} onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    );
  }
  const project = props.project.Project;
  return (
    <div className={classes["popup"]}>
      <div className={classes["project"]}>
        <h1 onClick={props.click} className={classes["cross"]}>
          x{" "}
        </h1>
        <div className={classes["name"]}>
          <h1>{project.Name}</h1>
        </div>
        <div className={classes["heading"]}>
          <h2>{project.Description}</h2>
        </div>
        <div className={classes["carousel"]}>
          <Carousel
            itemsToShow={3}
            breakPoints={breakPoints}
            renderArrow={myArrow}
          >
            {project.Features.map((item) => {
              return (
                <div className={classes["item"]}>
                  <div className={classes["text"]}>{item}</div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className={classes["skill"]}>
          {project.Tech.map((skill) => {
            const photo = Image[`${skill}`];
            return (
              <div
                className={classes["icon"]}
                style={{ backgroundImage: `url(${photo})` }}
              ></div>
            );
          })}
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
