import React, { useEffect } from "react";
import classes from "./carousel.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <div className={classes["back"]}>
      <div data-aos="fade-down" className={classes["card"]}>
        <h1 className={classes["icon"]}>
          <i class="fas fa-fighter-jet"></i>{" "}
        </h1>
        <h3 className={classes["text"]}>Fast</h3>
      </div>
      <div data-aos="fade-up" className={classes["card"]}>
        <h1 className={classes["icon"]}>
          <i class="fas fa-mobile-alt"></i>{" "}
        </h1>
        <h3 className={classes["text"]}>Responsive</h3>
      </div>
      <div data-aos="fade-down" className={classes["card"]}>
        <h1 className={classes["icon"]}>
          <i class="fas fa-user-friends"></i>{" "}
        </h1>
        <h3 className={classes["text"]}>User-friendly</h3>
      </div>
      <div data-aos="fade-up" className={classes["card"]}>
        <h1 className={classes["icon"]}>
          <i class="far fa-folder"></i>{" "}
        </h1>
        <h3 className={classes["text"]}>Folder Structure</h3>
      </div>
    </div>
  );
}
