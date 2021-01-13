import React, { useEffect } from "react";
import classes from "./Popup.module.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Popup = (props) => {
  const project = props.project.Project;
  return (
    <div className={classes["popup"]}>
      <div className={classes["project"]}>
        <h1 onClick={props.click} className={classes["cross"]}>
          <i class="far fa-times-circle"></i>{" "}
        </h1>
        <h1>{project.Name}</h1>
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
