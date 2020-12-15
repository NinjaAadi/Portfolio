import classes from './projects.module.css';
import img from '../../assets/projects.svg';



const Project = () => {
  return (
    <div className={classes["background"]}>
      <img src={img} className={classes["college"]} />
      <h1 className={classes["header"]}>Projects</h1>
      
    </div>
  );
}
export default Project;