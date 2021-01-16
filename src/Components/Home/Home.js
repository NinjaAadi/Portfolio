import classes from "./home.module.css";
import Firstback from "./FirstBack/Firstback";
import Secondback from "./Secondback/Secondback";
import Thirdback from "./Thirdback/Thirdback";
const Home = () => {
  return (
    <div className={classes["background"]}>
      <Firstback />
      <Secondback />
      <Thirdback />
    </div>
  );
};

export default Home;
