import React, { useEffect } from "react";
import classes from "./Firstback.module.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Firstback = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes["body"]}>
      <div data-aos="fade-right" className={classes["div1"]}>
        <div className={classes["hello"]}>
          <h1>Hello, I am </h1>
        </div>
        <div className={classes["name"]}>
          <h1>Aaditya Pal</h1>
        </div>
        <div className={classes["text"]}>
          <h1>I am </h1>
          <div className={classes["type"]}>
            {" "}
            <Typewriter
              options={{
                strings: [
                  "A Full Stack Developer!",
                  "A Competitive Programmer!",
                  "An Extrovert!",
                  "Always ready to learn!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div data-aos="flip-up" className={classes["buttondiv"]}>
          <button className={classes["aboutus"]}>
            About Me <i class="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
      <div className={classes["div2"]} data-aos="slide-down">
        <div
          className={classes["image"]}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </div>
    </div>
  );
};

export default Firstback;
