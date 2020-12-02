import React from "react";
import classes from "./pbar.module.css";
const Pbar = ({ done, skill }) => {
  console.log(done,skill);
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={classes["progress"]}>
      <div className={classes["skills"]}>
        <h4>{skill}</h4>
      </div>
      <div className={classes["progress-done"]} style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Pbar;
