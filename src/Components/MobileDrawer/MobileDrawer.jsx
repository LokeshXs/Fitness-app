import { Cancel } from "@mui/icons-material";
import styles from "./MobileDrawer.module.css";
import React from 'react'
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";



const MobileDrawer = ({ isOpen, closeMobileDrawer }) => {
  return (
    <div className={styles.drawerContainer} style={{ transform: `${isOpen ? 'translate(0,0)' : 'translate(100%,0)'}` }}>
      <div className={styles.iconContainer}>
        <IconButton aria-label="delete" onClick={closeMobileDrawer} >
          <Cancel sx={{ width: '3rem', height: '3rem', color: '#FCA311' }} />
        </IconButton>
      </div>

      <ul className={styles.navLinks}>
        <li className={styles.navLink} onClick={closeMobileDrawer}><Link to="/">Home</Link></li>
        <li className={styles.navLink} onClick={closeMobileDrawer}><Link to="#exercises">Exercises</Link></li>

      </ul>
    </div>
  )
}

export default MobileDrawer