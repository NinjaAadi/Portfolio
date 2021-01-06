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
          <h1 className={classes["head"]} data-aos="fade-down">
            About Me
          </h1>
        </div>
        <div className={classes["flex"]}>
          <div className={classes["div1"]}>
            <div className={classes["head1"]}>
              <h1 data-aos="fade-right">
                Info{" "}
                <i class="fas fa-info-circle" style={{ color: "#0071c5" }}></i>
              </h1>
            </div>
            <div className={classes["aboutme"]} data-aos="fade-up">
              <p>
                Hii , My name is{" "}
                <b style={{ color: "#a3d2ca", fontSize: "2rem" }}>
                  Aaditya Pal
                </b>
                . I am currently 20 years old. I am a full stack web developer.I
                also practice Competitive Programming.I am currently a student.
                My hobbies include novels, driving and music.
              </p>
            </div>
            <div className={classes["follow"]}>
              <h2 data-aos="fade-down">
                Follow
                <i class="fas fa-eye" style={{ color: "#0071c5",marginLeft:"15px"}}></i>
              </h2>
            </div>
            <div className={classes["label1"]} data-aos="fade-down">
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
            <div className={classes["head1"]}>
              <h1 data-aos="fade-down">
                Contact Me{"  "}
                <i class="fas fa-id-card-alt" style={{ color: "#0071c5" }}></i>
              </h1>
            </div>
            <div className={classes["label"]} data-aos="fade-down">
              <h2 className={classes["h2"]}>
                Email{" "}
                <i
                  class="fas fa-envelope-square"
                  style={{ color: "#008891", fontSize: "1.5rem" }}
                ></i>
              </h2>
              <a
                className={classes["anc"]}
                href="mailto:aadityapal.info@gmail.com"
              >
                aadityapal.info@gmail.com
              </a>
            </div>

            <div className={classes["label"]} data-aos="fade-down">
              <h2 className={classes["h2"]}>
                Phone{" "}
                <i
                  class="fas fa-phone"
                  style={{ color: "#008891", fontSize: "1.5rem" }}
                ></i>
              </h2>
              <a className={classes["anc"]} href="tel:+917903966014">
                +917903966014
              </a>
            </div>
            <div className={classes["label"]} data-aos="fade-down">
              <h2 className={classes["h2"]}>
                Address{" "}
                <i
                  class="far fa-address-card"
                  style={{ color: "#008891", fontSize: "1.5rem" }}
                ></i>
              </h2>
              <p className={classes["anc"]}>
                Lowadih Chowk, Litch Bagan Namkun Ranchi, Jharkhand
                <br />
                Pin : 834010
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Secondback;
