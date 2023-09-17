import styles from "./HeroSection.module.css";
import  { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = ({intersectionRef}) => {
  const heroRef = useRef();
  

  

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });



  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const textXFirst = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["80%", "120%"]);
  const textXSecond = useTransform(scrollYProgress, [0, 1], ["60%", "120%"]);
  const slide = useTransform(scrollYProgress,[0,1],["0%","10%"])
  


  return (

    <motion.section className={styles.heroSection} ref={heroRef}  >
      <div ref={intersectionRef} style={{width:'100%',height:'100%'}}>
      <motion.h1 style={{ y: textY }}>STRONG</motion.h1>

      <motion.div style={{ y: backgroundY }} className={styles['heroSectionText']}>
        <p>BEAT THE ROUTINE. TRAIN AT THE</p>
        <p>CALIBER OF WORLD CHAMPIONS AND</p>
        <p>GET IN THE BEST SHAPE OF YOUR LIFE.</p>
        <p id={styles.colonText}>:</p>
      </motion.div>

      <motion.div className={styles['heroSectionTextVertical']}>
        <motion.p style={{ x: textXFirst }} className={styles['heroSectionTextVertical-first']}>DETERMINATION</motion.p>
        <motion.p style={{ x: textX }} className={styles['heroSectionTextVertical-second']}>+</motion.p>
        <motion.p style={{ x: textXSecond }} className={styles['heroSectionTextVertical-third']}>PRESEVERANCE</motion.p>
      </motion.div>

      <motion.p style={{translateX:slide}} className={styles['heroSection-exercise-text']}>EXERCISE</motion.p>
      </div>
    </motion.section>
    


  )
};

export default HeroSection;