import React, { Fragment, useEffect } from "react";
import classes from "./Secondback.module.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";
import Carousel, { consts } from "react-elastic-carousel";
const Secondback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
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
  return (
    <Fragment>
      <div className={classes["body"]}>
        <div className={classes["cont"]}>
          <div className={classes["hi"]}>
            <h1>
              Hi, I'm <p className={classes["name"]}>Aaditya Pal</p>. Nice to
              meet you!
            </h1>
          </div>
          <div className={classes["about"]} data-aos="fade-down">
            <h2>
              I am currently 20 years old. I am a full stack web developer.I
              am also a  Competitive Coder.I am currently a student. My
              hobbies include novels, driving, music and obviously programming.
            </h2>
          </div>
        </div>

        <div className={classes["head2"]}>
          <h1 data-aos="fade-up">
            About Me <i class="fas fa-male"></i>
          </h1>
        </div>
        <div className={classes["container"]}>
          <div className={classes["child"]} data-aos="fade-down">
            <div className={classes["heading"]}>
              <h1>
                Experience{" "}
                <i class="fas fa-briefcase" style={{ color: "#ffffff" }}></i>
              </h1>
              <Carousel renderArrow={myArrow}>
                <div className={classes["item"]}>Chegg Editorialist</div>
                <div className={classes["item"]}>Web developer at SMIT</div>
              </Carousel>
            </div>
          </div>
          <div className={classes["child"]} data-aos="fade-down">
            <div className={classes["heading"]}>
              <h1>
                Education{" "}
                <i
                  class="fas fa-graduation-cap"
                  style={{ color: "#ffffff" }}
                ></i>
              </h1>
              <Carousel renderArrow={myArrow}>
                <div className={classes["item"]}>
                  B.TECH CSE [2019-2023]
                  <br />
                  GPA:9.21
                </div>
                <div className={classes["item"]}>
                  Sikkim Manipal Institute of Technology
                </div>
                <div className={classes["item"]}>
                  Class 12
                  <br />
                  GPA:9.31
                </div>
                <div className={classes["item"]}>
                  Class 10 <br />
                  GPA:10
                  <br />
                </div>
                <div className={classes["item"]}>
                  Surendranath Centenary School
                </div>
              </Carousel>
            </div>
          </div>
          <div className={classes["child"]} data-aos="fade-down">
            <div className={classes["heading"]}>
              <h1>
                Achievements{" "}
                <i class="fas fa-trophy" style={{ color: "#ffffff" }}></i>
              </h1>
              <Carousel renderArrow={myArrow}>
                <div className={classes["item"]}>
                  <p className={classes["p"]}>
                    4 <i class="fas fa-star"></i> Codechef
                  </p>
                </div>
                <div className={classes["item"]}>
                  ECE Department Hakathon Winner
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Secondback;
