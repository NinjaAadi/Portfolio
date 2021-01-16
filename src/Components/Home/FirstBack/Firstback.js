import React, { Fragment, useEffect } from "react";
import classes from "./Firstback.module.css";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import down from "../../../assets/down.svg";
import { useSpring, animated } from "react-spring";

const Firstback = (props) => {
  const st = useSpring(
    {
      opacity: 1,
      from: { opacity: 0.3 },
    },
    { config: { duration: 5000 } }
  );
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Fragment>
      <div className={classes["body"]}>
        <div className={classes["container"]}>
          <animated.h1 className={classes["head1"]} data-aos="fade-down">
            Full stack developer and designer
          </animated.h1>
          <div className={classes["head2"]}>
            <Typewriter
              options={{
                strings: [
                  "I like to code!",
                  "I love to fail!",
                  "I am an Extrovert!",
                  "I am Always ready to learn!",
                  "I am a Noob Coder!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
      </div>
      <div className={classes["image"]}>
        <img
          className={classes["img"]}
          src={down}
          alt="coder"
        />
      </div>
    </Fragment>
  );
};

export default Firstback;
