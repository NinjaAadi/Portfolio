import React, { Fragment, useEffect } from "react";
import classes from "./Firstback.module.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import back from "../../../assets/back.svg";
import down from "../../../assets/down.svg";
const Firstback = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <div
        className={classes["body"]}
        style={{ backgroundImage: `url(${back})` }}
      >
        <div className={classes["container"]}>
          <div className={classes["child1"]}>
            <div className={classes["text1"]}>
              <p>
                Hello
                <i
                  class="fas fa-handshake"
                  style={{ marginLeft: "10px", color: "whitesmoke" }}
                ></i>
                , I am{" "}
              </p>
            </div>
            <div className={classes["name"]}>
              <p data-aos="fade-down">Aaditya Pal</p>
            </div>
            <div className={classes["type"]}>
              <Typewriter
                style={{ color: "red" }}
                options={{
                  strings: [
                    "I am a Full Stack Developer!",
                    "I am a Competitive Programmer!",
                    "I am an Extrovert!",
                    "I am Always ready to learn!",
                    "I am a Noob Coder!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <div className={classes["image"]}>
              <img src={down} alt="img" data-aos="fade-up" />
            </div>
          </div>
          <div className={classes["child2"]}>
            <img
              className={classes["img"]}
              src={props.image}
              alt="nothing"
            ></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Firstback;
