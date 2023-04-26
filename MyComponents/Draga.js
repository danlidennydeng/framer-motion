import React, {useRef} from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';
// import Image from 'next/image'; 
// import piece from '../public/Asset09.png';

function Draga() {
  const parentRef = useRef();

  return (

    <div className={styles.div3} ref={parentRef}>
          <motion.div className={styles.asset8} drag dragConstraints={parentRef}></motion.div>
          <motion.div className={styles.asset9} drag dragConstraints={parentRef}></motion.div>
    </div>
    
  )
}  


export default Draga