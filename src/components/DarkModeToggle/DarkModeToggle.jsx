import React from 'react'
import styles from "./darkModeToggle.module.css"
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
const DarkModeToggle = () => {

  const mode = "dark"
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
      <BsFillMoonFill />
      </div>
      <div className={styles.icon}>
      <BsFillSunFill/>
      </div>
      <div className={styles.ball} style={mode === "light" ? {left:"2px"} : {right:"2px"}}>

      </div>
    </div>
  );
};

export default DarkModeToggle;
