import React from 'react'
//Components
import ScrollForMore from '../components/scrollForMore'
import { motion } from 'framer-motion'
//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
const firstname = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
}
const lastname = {
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
}
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
}

const Model = ({ imageDetails }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      className="single"
    >
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 20,
                transition: { delay: 1, ...transition },
              }}
              className="details"
            >
              <div className="location">
                <span>28.538336</span>
                <span>-81.379234</span>
              </div>
              <div className="mua">MUA: @mylifeascrystall</div>
            </motion.div>
            <div className="model">
              <motion.span varients={firstname} className="first">
                <motion.span varients={letter}>Y</motion.span>
                <motion.span varients={letter}>a</motion.span>
                <motion.span varients={letter}>s</motion.span>
                <motion.span varients={letter}>m</motion.span>
                <motion.span varients={letter}>e</motion.span>
                <motion.span varients={letter}>e</motion.span>
                <motion.span varients={letter}>n</motion.span>
              </motion.span>
              s
              <motion.span varients={lastname} className="last">
                <motion.span varients={letter}>T</motion.span>
                <motion.span varients={letter}>a</motion.span>
                <motion.span varients={letter}>r</motion.span>
                <motion.span varients={letter}>i</motion.span>
                <motion.span varients={letter}>q</motion.span>
              </motion.span>
            </div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                initial={{
                  y: '-50%',
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: '0',
                  width: '100%',
                  height: window.innerWidth > 1440 ? 800 : 400,
                  transition: { delay: 0.2, ...transition },
                }}
                className="thumbnail-single"
              >
                <div className="frame-single">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{
                      y: window.innerWidth > 1440 ? -1200 : -600,
                      transition: { delay: 0.2, ...transition },
                    }}
                    src={require('../images/yasmeen.webp')}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Model
