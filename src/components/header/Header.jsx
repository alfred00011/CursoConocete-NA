import { motion } from "framer-motion";

let easeing = [0.6,-0.05,0.01,0.99];

const stagger = {
  animate:{
    transition:{
      delayChildren:0.4,
      staggerChildren:0.2,
      staggerDirection:1
    }
  }
}

const header={
  initial:{
    y:-60,
    opacity:0,
    transition:{duration:0.05, ease:easeing}
  },
  animate:{
    y:0,
    opacity:1,
    animation:{
      duration:0.6,
      ease:easeing
    }
  }
};



const Header = () => {
    return (
        <motion.div initial = 'initial' animate = 'animate'>
            <motion.header className="header_course" variants={stagger}>
                <motion.div className="logo_wrapper" variants={header}>Nueva <span>Acrópolis</span> </motion.div>
                <motion.div className="menu_container" variants={stagger}>
                    <motion.span className="menu" variants={header}>
                        <a>Inicio</a>
                        <a>Contenido</a>
                        <a>Beneficios</a>
                        <a>¿Quiénes Somos?</a>
                        <a>Contactanos</a>
                    </motion.span>
                </motion.div>
            </motion.header>

        </motion.div>
    )
}

export default Header;