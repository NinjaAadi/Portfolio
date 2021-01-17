import classes from "./home.module.css";
import { useEffect } from "react";
import Firstback from "./FirstBack/Firstback";
import Secondback from "./Secondback/Secondback";

const Home = () => {
  useEffect(() => {
    const scroll = () => {
      window.scrollTo(0, 0);
    };
    scroll();
  }, []);
  return (
    <div className={classes["background"]}>
      <Firstback />
      <Secondback />
    </div>
  );
};

export default Home;
