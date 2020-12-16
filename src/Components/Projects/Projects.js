import classes from "./projects.module.css";
import img from "../../assets/projects.svg";
import github from "../../assets/github.png";


const Project = () => {
  return (
    <div className={classes["background"]}>
      <img src={img} className={classes["college"]} />
      <h1 className={classes["header"]}>Projects</h1>
      <div className={classes["git"]}>
        <h1>My Github</h1>
        <a href="https://github.com/NinjaAadi">
          <img src={github} className={classes["gitpic"]}></img>
        </a>
      </div>
      <div className={classes["project"]}>
        <div className={classes["child"]}>
          <p className={classes["heading"]}>Smit_Dev</p>
          <h4 className={classes["about"]}>Description</h4>
          <h4 className={classes["desc"]}>
            This is a blogging website for college students.There are several
            features such as add, edit, delete, like, dislike a post. Features
            such as secure login and signin are also available. We can also
            create a profile and even update that.
          </h4>
          <h4 className={classes["about"]}>Tech Stack</h4>
          <ul>
            <li className={classes["list"]}>HTML</li>
            <li className={classes["list"]}>CSS</li>
            <li className={classes["list"]}>React</li>
            <li className={classes["list"]}>Node</li>
            <li className={classes["list"]}>MongoDB</li>
            <li className={classes["list"]}>Express</li>
          </ul>
          <h4 className={classes["about"]}>Github</h4>
          <a
            href="https://github.com/NinjaAadi/Smit_developer_official"
            target="_blank"
            className={classes["github"]}
          >
            Github
          </a>
        </div>
        <div className={classes["child"]}>
          <p className={classes["heading"]}>Notelify</p>
          <h4 className={classes["about"]}>Description</h4>
          <h4 className={classes["desc"]}>
            This is a note taking web app which is very handy when it comes to
            taking notes. We can make a sketch and instantly download the
            image.We can add, delete, edit a note. Each individual can have
            their account.
          </h4>
          <h4 className={classes["about"]}>Tech Stack</h4>
          <ul>
            <li className={classes["list"]}>HTML</li>
            <li className={classes["list"]}>CSS</li>
            <li className={classes["list"]}>JavaScript</li>
            <li className={classes["list"]}>PHP</li>
            <li className={classes["list"]}>mySQL</li>
            <li className={classes["list"]}>Bootstrap</li>
          </ul>
          <h4 className={classes["about"]}>Github</h4>
          <a
            href="https://github.com/NinjaAadi/Notelify"
            target="_blank"
            className={classes["github"]}
          >
            Github
          </a>
        </div>
        <div className={classes["child"]}>
          <p className={classes["heading"]}>Departmental Website</p>
          <h4 className={classes["about"]}>Description</h4>
          <h4 className={classes["desc"]}>
            This is a departmental website for the ece department.There is an
            admin panel from which we can add and update news to be given.
          </h4>
          <h4 className={classes["about"]}>Tech Stack</h4>
          <ul>
            <li className={classes["list"]}>HTML</li>
            <li className={classes["list"]}>CSS</li>
            <li className={classes["list"]}>JavaScript</li>
            <li className={classes["list"]}>PHP</li>
            <li className={classes["list"]}>mySQL</li>
            <li className={classes["list"]}>Bootstrap</li>
          </ul>
          <h4 className={classes["about"]}>Github</h4>
          <a
            href="https://github.com/NinjaAadi/ECE-DEPARTMENTAL-WEBSITE"
            target="_blank"
            className={classes["github"]}
          >
            Github
          </a>
        </div>
        <div className={classes["child"]}>
          <p className={classes["heading"]}>REST-API</p>
          <h4 className={classes["about"]}>Description</h4>
          <h4 className={classes["desc"]}>
            This is a REST api which is made to add,delete, update courses that
            are made by the people. We can update our courses. This api has all
            the crud functionality
          </h4>
          <h4 className={classes["about"]}>Tech Stack</h4>
          <ul>
            <li className={classes["list"]}>HTML</li>
            <li className={classes["list"]}>Node</li>
            <li className={classes["list"]}>MongoDB</li>
            <li className={classes["list"]}>Express</li>
          </ul>
          <h4 className={classes["about"]}>Github</h4>
          <a
            href="https://github.com/NinjaAadi/REST-API-on-nodejs"
            target="_blank"
            className={classes["github"]}
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
