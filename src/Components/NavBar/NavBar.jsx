import styles from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { IconButton, useMediaQuery } from "@mui/material";
import { MenuOpen } from "@mui/icons-material";
import { useState } from "react";
import Backdrop from "../Backdrop/backdrop";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";




const NavBar = ({ inView }) => {
  const [mobileDrawerStatus, setMobileDrawerStatus] = useState(false);
  const tabletMatch = useMediaQuery("(max-width:936px)");
  const handleMobileDrawer = () => {
    setMobileDrawerStatus((prevState) => !prevState);
  }

  

  return (
    <header >
      <motion.nav className={`${styles['navBar_Container']} ${inView ? '' : styles["stickyNavBar"]}`} >

        <img src={logo} alt="logo" className={styles.logo} />

        {
          tabletMatch ? <IconButton aria-label="delete" onClick={handleMobileDrawer}>
            <MenuOpen sx={{ width: '3rem', height: '3rem', color: '#FCA311' }} />
          </IconButton> :
            <ul className={styles['navBarLinks_Container']}>
              <li className={styles.navBarLink}><Link to="/">Home</Link></li>
              <li className={styles.navBarLink}><a href="#exercises">Exercises</a></li>
              
            </ul>
        }

        {tabletMatch ? '' : <button className={styles['appDownload-Btn']}>GET OUR APP</button>}

        {ReactDOM.createPortal(<Backdrop isOpen={mobileDrawerStatus} closeMobileDrawer={handleMobileDrawer} />, document.getElementById('backdrop-root'))}

        {ReactDOM.createPortal(<MobileDrawer isOpen={mobileDrawerStatus} closeMobileDrawer={handleMobileDrawer} />, document.getElementById('overlay-root'))}



      </motion.nav>
    </header>
  )
}

export default NavBar;