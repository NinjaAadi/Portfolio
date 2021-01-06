import { useEffect } from "react";
import Particles from "react-particles-js";
import classes from "./home.module.css";
import Firstback from "./FirstBack/Firstback";
import image from "../../assets/pic1.svg";
import Secondback from "./Secondback/Secondback";
const Home = () => {
  return (
    <div className={classes["background"]}>
      <Firstback image={image} />
      <Secondback />
    </div>
  );
};

export default Home;
