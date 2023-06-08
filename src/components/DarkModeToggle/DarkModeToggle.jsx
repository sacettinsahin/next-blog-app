"use client"

import React, { useContext } from 'react'
import styles from "./darkModeToggle.module.css"
import { BsFillMoonFill,BsFillSunFill } from "react-icons/bs";
import { ThemeContext } from '@/context/ThemeContext';
const DarkModeToggle = () => {
  const {toggle,mode} = useContext(ThemeContext)
  return (
    <div className={styles.container} onClick={toggle}>
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
