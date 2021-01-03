import { useEffect } from "react";
import classes from "./home.module.css";
import Firstback from "./FirstBack/Firstback";
import image from "../../assets/pic1.svg";

const Home = () => {
  return (
    <div className={classes["background"]}>
      <Firstback image={image} />
    </div>
  );
};

export default Home;
