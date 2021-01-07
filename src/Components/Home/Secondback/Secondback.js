import React, { Fragment, useEffect } from "react";
import classes from "./Secondback.module.css";
import profile from "../../../assets/profile.jpeg";
import Aos from "aos";
import "aos/dist/aos.css";

const Secondback = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, disable: "mobile" });
  }, []);
  return (
    <Fragment>
      <div className={classes["body"]}>
        <div className={classes["about"]}>
          <h1 data-aos="zoom-in">About Me</h1>
        </div>
        <div className={classes["flex"]}>
          <div className={classes["div1"]}>
            <div className={classes["label"]}>
              <h1 data-aos="fade-up">
                Info
                <i
                  class="fas fa-question-circle"
                  style={{
                    marginLeft: "8px",
                    color: "#00587a",
                    fontSize: "1.6rem",
                  }}
                ></i>
              </h1>
            </div>
            <div className={classes["para"]}>
              <p data-aos="zoom-in">
                Hii , My name is
                <b
                  style={{
                    color: "#606470",
                    fontSize: "1.5rem",
                    marginLeft: "10px",
                  }}
                >
                  Aaditya Pal
                </b>
                . I am currently 20 years old. I am a full stack web developer.I
                also practice Competitive Programming.I am currently a student.
                My hobbies include novels, driving, music and obviously
                programming.
              </p>
            </div>
            <br />
            <div className={classes["label"]}>
              <h1 data-aos="fade-up">
                Follow Me{" "}
                <i
                  class="fas fa-user-plus"
                  style={{
                    marginLeft: "8px",
                    color: "#00587a",
                    fontSize: "1.6rem",
                  }}
                ></i>
              </h1>
            </div>
            <div className={classes["follow"]} data-aos="zoom-out">
              <a
                href="https://www.instagram.com/____aaditya001____/"
                target="_blank"
                rel="noreferrer"
                className={classes["icon"]}
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/aaditya-pal-7903/"
                target="_blank"
                rel="noreferrer"
                className={classes["icon"]}
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/NinjaAadi"
                target="_blank"
                rel="noreferrer"
                className={classes["icon"]}
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.codechef.com/users/ninjaaadi7903"
                target="_blank"
                rel="noreferrer"
                className={classes["icon"]}
              >
                <span
                  class="iconify"
                  data-icon="simple-icons:codechef"
                  data-inline="false"
                ></span>
              </a>
            </div>
          </div>
          <div className={classes["div2"]}>
            <div className={classes["label"]}>
              <h1 data-aos="fade-up">
                Contact Me{" "}
                <i
                  class="fas fa-id-card-alt"
                  style={{
                    marginLeft: "8px",
                    color: "#00587a",
                    fontSize: "1.6rem",
                  }}
                ></i>
              </h1>
            </div>
            <div className={classes["minlabel"]} data-aos="fade-down">
              <h2>
                Email <i class="fas fa-envelope"></i>
              </h2>
              <a
                className={classes["anc"]}
                href="mailto:aadityapal.info@gmail.com"
              >
                aadityapal.info@gmail.com
              </a>
            </div>
            <div className={classes["minlabel"]} data-aos="fade-down">
              <h2>
                Phone <i class="fas fa-phone"></i>
              </h2>
              <a className={classes["anc"]} href="tel:+917903966014">
                +91-7903966014
              </a>
            </div>
            <div className={classes["minlabel"]} data-aos="fade-down">
              <h2>
                Address <i class="fas fa-street-view"></i>
              </h2>
              <a
                className={classes["anc"]}
                href="https://www.google.com/maps/place/Lowadih,+Ranchi,+Jharkhand+834010/@23.3594537,85.3533322,15z/data=!3m1!4b1!4m5!3m4!1s0x39f4e22d0f22d1b7:0xa0ac25821309cd29!8m2!3d23.359795!4d85.362529"
                target="_blank"
                rel="noreferrer"
              >
                Lowadih Chowk Litchi Bagan Namkum Ranchi, Jharkhand
                <br />
                Pin:834010
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Secondback;
