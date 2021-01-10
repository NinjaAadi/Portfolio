import classes from "./Card.module.css";
import React, { Fragment, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Popup from "./Popup/Popup";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000, enable: "mobile" });
  }, []);
  return (
    <Fragment>
      <div data-aos="fade-down" className={classes["card"]}>
          <button>Click Me</button>
      </div>
      <Popup/>
    </Fragment>
  );
};

export default Card;
