import React, { useEffect } from "react";
import classes from "./Firstback.module.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

const Firstback = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <div className={classes["body"]}>
      <div data-aos="fade-right" className={classes["div1"]}>
        <div className={classes["hello"]}>
          <h1>
            Hello <i class="fas fa-fist-raised"></i>, I am{" "}
          </h1>
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
                  "Noob Coder!"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes["div2"]}>
        <div
          className={classes["image"]}
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </div>
    </div>
  );
};

export default Firstback;
