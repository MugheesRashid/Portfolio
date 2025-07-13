import React from "react";
import { RxCross1 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "../../commons/Magnetic";

const Navbar = ({ isOpen, setIsOpen }) => {

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "50%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-[40vw] fixed h-screen bg-[#111] z-30 top-0 right-0 text-[#f2f2f2] Montserrat">
          <Magnetic>
            <motion.div
              onClick={() => setIsOpen(false)}
              className="clsbtn p-5 absolute top-5 left-5 rounded-full flex justify-center items-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <RxCross1 size={"1.5em"} className="text-2xl text-[#f2f2f2] z-10" />
            </motion.div>
          </Magnetic>
          <motion.div
            className="flex flex-col justify-around items-center h-screen gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <motion.div
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <Magnetic>

                <motion.h1
                  className="text-[50px] cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                >
                  <p className="leading-none">Home</p>
                </motion.h1>
              </Magnetic>
              <Magnetic>
                <motion.h1
                  className="text-[50px] cursor-pointer text-[#808181]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.8, duration: 0.3 }}
                >
                 <p className="leading-none">About <span className="block text-[13px] text-center opacity-50">(Coming Soon)</span></p>
                </motion.h1>
              </Magnetic>
              <Magnetic>
                <motion.h1
                  className="text-[50px] cursor-pointer text-[#808181]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: 0.9, duration: 0.3 }}
                >
                 <p className="leading-none">Contact <span className="block text-[13px] text-center opacity-50">(Coming Soon)</span></p>
                </motion.h1>
              </Magnetic>
            </motion.div>
            <motion.div
              className="social w-full absolute bottom-10 Inter flex flex-row items-center justify-center gap-5 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              <Magnetic>
                <motion.p
                  className="navlink text-[18px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 1.2, duration: 0.3 }}
                >
                  <a href="https://www.linkedin.com/in/mughees-rashid-2b1589210/" target="_blank">
                    LinkedIn
                  </a>
                </motion.p>
              </Magnetic>
              <Magnetic>
                <motion.p
                  className="navlink text-[18px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 1.3, duration: 0.3 }}
                >
                  <a href="https://github.com/mugheesrashid" target="_blank">
                    Github
                  </a>
                </motion.p>
              </Magnetic>
              <Magnetic>
                <motion.p
                  className="navlink text-[18px]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 1.4, duration: 0.3 }}
                >
                  <a href="https://www.instagram.com/mughees.rashid/" target="_blank">
                    Instagram
                  </a>
                </motion.p>
              </Magnetic>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar; 