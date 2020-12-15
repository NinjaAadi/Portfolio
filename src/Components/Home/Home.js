import { Fragment } from "react";
import classes from "./home.module.css";
import picture from "../../assets/home_back.svg";
import profile from "../../assets/profile.jpeg";
import profile2 from "../../assets/profile2.svg";
const Home = () => {
  return (
    <div className={classes["background"]}>
      <img className={classes["img1"]} src={picture} />
      <div className={classes["head"]}>
        <h1 className={classes["h1"]}> Hi! :-)</h1>
        <h3 className={classes["header"]}>Aaditya here!</h3>
      </div>
      <br />
      <br />
      <div className={classes["code"]}>
        <p className={classes["para"]}>"Be a top-class learner"</p>
        <img className={classes["profile2"]} src={profile2} />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br/>
      <br/>
      <hr />
      <div className={classes["aboutme"]}>
        <h2 className={classes["h3"]}>Name : </h2>
        <p align="justify" className={classes["h4"]}>
          Aaditya Pal
        </p>
        <h2 className={classes["h3"]}>Age : </h2>
        <p align="justify" className={classes["h4"]}>
          20
        </p>
        <h2 className={classes["h3"]}>Profile Photo : </h2>
        <img className={classes["profile"]} src={profile} />
        <h2 className={classes["h3"]}>Location : </h2>
        <p align="justify" className={classes["h4"]}>
          Lowadih Chowk, Litchi Bagan, Namkum Ranchi Jharkhand Pin:834010
        </p>
        <h2 className={classes["h3"]}>About Me : </h2>
        <p align="justify" className={classes["h4"]}>
          I am a full stack web developer and a competitive programmer. I love
          to take up challenges and code difficult stuffs. Programming is my
          passion and I am always ready to learn new concepts about it. I love
          developement as it allows me to show my idea to my friends and to the
          complete world. I also like working in a team as learning happens
          faster there.
        </p>
      </div>
    </div>
  );
};

export default Home;
