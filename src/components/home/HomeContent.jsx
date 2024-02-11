import { motion } from 'framer-motion';
import React from 'react';
import CarouselHistories from "./CarouselHistories";

let easeing = [0.6,-0.05,0.01,0.99];
  
  const transition = {duration:1.4,ease:[0.6,0.01,-0.05,0.9]};
  
  const firstName = {
    initial:{
      y:-20,
    },
    animate:{
      y:0,
      transition:{
        delayChildren:0.4,
        staggerChildren:0.04,
        staggerDirection:-1
      }
    }
  }
  const fadeInUp = {
    initial:{
      y:-60,
      opacity:0,
      transition:{
        duration:0.6, ease:easeing
      }
    },
    animate:{
      y:0,
      opacity:1,
      transition:{
        duration:0.6,
        delay:0.5,
        ease:easeing
      }
    }
  };
  
  const letter = {
    initial:{
      y:300,
    },
    animate:{
      y:0,
      transition:{duration:1, ...transition}
    }
  };
  
  const lastName = {
    initial:{
      y:-20,
    },
    animate:{
      y:0,
      transition:{
        delayChildren:0.4,
        staggerChildren:0.04,
        staggerDirection:1
      }
    }
  }
  

const HomeContent = () => {
    return (
        <motion.div className="content_wrapper" initial={{opacity:0, scale:0}} animate={{opacity:1,scale:1}} transition={{duration:0.3, ease:easeing}}>
            <div className="left_content_wrapper">
                <motion.h1>
                    <motion.span variants={firstName} initial= 'initial' animate='animate' className='first'>
                        <motion.span variants={letter}>C</motion.span>
                        <motion.span variants={letter}>u</motion.span>
                        <motion.span variants={letter}>r</motion.span>
                        <motion.span variants={letter}>s</motion.span>
                        <motion.span variants={letter}>o</motion.span> <br/>
                      </motion.span><br/>
                      <motion.span variants={lastName} initial= 'initial' animate='animate' className='last'>
                      <motion.span variants={letter}>C</motion.span>
                        <motion.span variants={letter}>o</motion.span>
                        <motion.span variants={letter}>n</motion.span>
                        <motion.span variants={letter}>ó</motion.span>
                        <motion.span variants={letter}>c</motion.span>
                        <motion.span variants={letter}>e</motion.span>
                        <motion.span variants={letter}>t</motion.span>
                        <motion.span variants={letter}>e</motion.span>
                        <motion.span variants={letter} className='second'>A</motion.span>
                        <motion.span variants={letter} className='second'>T</motion.span>
                        <motion.span variants={letter}>i</motion.span>
                        <motion.span variants={letter} className='second'>M</motion.span>
                        <motion.span variants={letter}>i</motion.span>
                        <motion.span variants={letter}>s</motion.span>
                        <motion.span variants={letter}>m</motion.span>
                        <motion.span variants={letter}>o</motion.span>
                    </motion.span>
                </motion.h1>
                <motion.p variants={fadeInUp}>Y responde tus preguntas sobre la vida.</motion.p>
            </div>
            <motion.div className="right_content_wrapper">
                <CarouselHistories/>
            </motion.div>
        </motion.div>
    )
}

export default HomeContent;