import React, { useState } from 'react';
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: 'Muhammad Faisal',
        project: 'Art n Vogue',
        img: './faisal.webp',
        text: `Working with Mughees was a game-changer. He quickly understood our brand, designed an amazing interface, and brought it to life with beautiful animations. The site feels modern, fast, and super user-friendly. Communication was smooth throughout. Highly recommended if you want someone who can blend design and development effortlessly.`
    },
    {
        name: 'MUHAMMAD Raheel',
        project: 'fimmun.com',
        img: './raheel.webp',
        text: `Mughees handled everything from UI/UX to backend without missing a beat. He delivered on time, added thoughtful touches, and made our platform stand out. The animations were subtle but impactful, and the experience across mobile and desktop is flawless. Easily one of the most reliable devs we’ve worked with.`
    },
];

const animationVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: { duration: 0.5, ease: 'easeInOut' }
};

function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleLeft = () => {
        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1);
    };

    const handleRight = () => {
        setActiveIndex(activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0);
    };

    return (
        <div className='w-screen flex flex-col bg-[#f2f2f2] items-center justify-between h-[90vh] px-10 py-10 relative'>
            <img src="./Ellipse.png" alt="" className='absolute -top-[50%] left-[-30%] z-[1]' />
            <img src="./Ellipse.png" alt="" className='absolute -top-[50%] right-[-30%] z-[1]' />

            {/* Heading */}
            <div className='flex flex-col items-center z-[2]'>
                <h1 className='text-[57px] Montserrat font-light leading-tight'>
                    What <span className='font-semibold text-[#71B0BA]'>People Say?</span>
                </h1>
                <p className='Poppins'>Real feedback from real results — delivered with precision.</p>
            </div>

            {/* Main Testimonial */}
            <div className="lower w-full flex flex-row items-center justify-around gap-7 z-[2] h-[350px] relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={animationVariants.transition}
                        className="flex flex-row items-center justify-around gap-7 absolute w-full"
                    >
                        {/* Image + Name */}
                        <div className="left flex flex-col items-center">
                            <div 
                                className="w-[250px] h-[250px] rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${testimonials[activeIndex].img})` }}
                            ></div>
                            <p className='w-2/3 text-center mt-4'>
                                {testimonials[activeIndex].name} from {testimonials[activeIndex].project}
                            </p>
                        </div>

                        {/* Testimonial Text */}
                        <div className="right w-[65%] relative">
                            <div className="absolute top-[-30%] rotate-45 left-[-6%] text-[90px]">"</div>
                            <p className='text-[28px] leading-tight EduSAHand'>
                                {testimonials[activeIndex].text}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <div className="navigations flex flex-row items-center justify-center gap-3 w-full z-[2]">
                <div 
                    onClick={handleLeft} 
                    className="cl w-10 h-10 bg-[#71B0BA] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#5a9ba5] transition-colors duration-200"
                >
                    <LuMoveLeft className="text-[#f2f2f2]" size={"1.5em"} />
                </div>
                <div 
                    style={{ "--progress": (activeIndex + 1) / testimonials.length }} 
                    className="line w-[200px] relative h-0.5 bg-[#fff]"
                ></div>
                <div 
                    onClick={handleRight} 
                    className="cr w-10 h-10 bg-[#71B0BA] rounded-full flex justify-center items-center cursor-pointer hover:bg-[#5a9ba5] transition-colors duration-200"
                >
                    <LuMoveRight className="text-[#f2f2f2]" size={"1.5em"} />
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
