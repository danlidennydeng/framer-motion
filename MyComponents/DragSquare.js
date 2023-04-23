import React, {useRef} from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';


function DragSquare() {
  const parentRef = useRef();

  return (

    <div className={styles.boxSection} ref={parentRef}  style={{ overflowY: "scroll", WebkitOverflowScrolling: "touch" }}>
          <motion.div className={styles.box1} drag dragConstraints={parentRef} whileDrag={{scale: 1.1}}>
          
          </motion.div>
        </div>
    
  )
}  


export default DragSquare