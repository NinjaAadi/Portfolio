import classes from "./home.module.css";
import Firstback from "./FirstBack/Firstback";
import Secondback from "./Secondback/Secondback";
const Home = () => {
  return (
    <div className={classes["background"]}>
      <Firstback />
      <Secondback />
    </div>
  );
};

export default Home;
