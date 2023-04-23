import React, {useRef} from 'react';
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css';


function DragSquare() {
  const parentRef = useRef();

  return (

    <div className={styles.boxSection} ref={parentRef}>
          <motion.div className={styles.box1} drag dragConstraints={parentRef} whileDrag={{scale: 1.1}} style={{ touchAction: "none" }}>
          
          </motion.div>
        </div>
    
  )
}  


export default DragSquare