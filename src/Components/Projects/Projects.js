import classes from "./projects.module.css";
import img from "../../assets/projects.svg";
import github from "../../assets/github.jpg";
const Project = () => {
  const click = () => {};
  return (
    <div className={classes["background"]}>
      <img className={classes["college"]} src={img} />
      <h1 className={classes["header"]}>Projects</h1>
      <h3 className={classes["projects"]}>My Github</h3>
      <a href="https://github.com/NinjaAadi" target="_blank">
        <img src={github} className={classes["github"]} />
      </a>
      <h3 className={classes["projects"]}>1. Smit Developer</h3>
      <h4 className={classes["idea"]}>Tech Stacks : </h4>
      <ul>
        <li className={classes["list"]}>HTML</li>
        <li className={classes["list"]}>Css</li>
        <li className={classes["list"]}>React Js</li>
        <li className={classes["list"]}>Node Js</li>
        <li className={classes["list"]}>MongoDB</li>
        <li className={classes["list"]}>JavaScript</li>
      </ul>
      <h4 className={classes["idea"]}>Description : </h4>
      <li className={classes["list"]}>
        A blogging website made for college students
      </li>
      <li className={classes["list"]}>
        Features like creating,deleating,editing posts
      </li>
      <li className={classes["list"]}>
        Like,Dislike,Comment,Delete Comment etc.
      </li>
      <br />
      <a
        href="https://github.com/NinjaAadi/Smit_developer_official"
        target="_blank"
      >
        <img src={github} className={classes["github"]} />
      </a>
      <h3 className={classes["projects"]}>2. Notelify</h3>
      <h4 className={classes["idea"]}>Tech Stacks : </h4>
      <ul>
        <li className={classes["list"]}>HTML</li>
        <li className={classes["list"]}>Css</li>
        <li className={classes["list"]}>MySQL</li>
        <li className={classes["list"]}>PHP</li>
        <li className={classes["list"]}>Jquery</li>
        <li className={classes["list"]}>JavaScript</li>
        <li className={classes["list"]}>Bootstrap </li>
      </ul>
      <h4 className={classes["idea"]}>Description : </h4>
      <li className={classes["list"]}>A note taking webapp for students</li>
      <li className={classes["list"]}>
        Features like sketching, downloading sketch,etc.
      </li>
      <li className={classes["list"]}>Create,edit, save a note etc.</li>
      <br />
      <a href="https://github.com/NinjaAadi/Notelify" target="_blank">
        <img src={github} className={classes["github"]} />
      </a>
      <p className={classes["para"]}>
        For more projects of mine.Vist my github page at the top.
      </p>
    </div>
  );
};
export default Project;
