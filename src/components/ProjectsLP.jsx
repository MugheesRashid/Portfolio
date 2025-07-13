import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Magnetic from '../commons/Magnetic'

const jobs = [
  {
    title: 'UX/UI Design',
    description: 'I design user-focused interfaces that are clean, intuitive, and built to enhance experience across all screens.',
    image3: './work3.jpg',
    info: 'In UX/UI design, I help businesses translate their ideas into interactive and visually appealing digital experiences. I work on wireframes, responsive layouts, color systems, and design systems that reflect your brand and improve usability. From landing pages to full dashboards, my designs are conversion-focused and mobile-ready. I also use design thinking to solve real problems while keeping the user at the center. You\'ll get Figma-based, pixel-perfect layouts that developers love to build and users love to use.',
    projects: [
      {
        title: 'Fimmun.com',
        description: 'A fashion-focused UI layout with a clean and artistic e-commerce vibe.',
        image: './fimmun.jpg',
        link: 'https://fimmun.com',
      }
    ]
  },
  {
    title: 'Full Stack Development',
    description: 'I build scalable and high-performance web applications using the MERN stack and modern best practices.',
    image3: './work1.png',
    info: 'In full-stack development, I manage both the frontend and backend of your project using technologies like React, Node.js, Express, and MongoDB. I set up APIs, secure authentication systems, database structures, and fully responsive interfaces. Whether it\'s a content system, admin dashboard, or client-facing web app, I make sure it loads fast, runs smooth, and works on every screen. I also use Git, RESTful architecture, and follow modern dev workflows to keep your app future-proof.',
    projects: [
      {
        title: 'Fimmun.com',
        description: 'Full-stack Shopify integration with frontend animations and admin-side customization.',
        image: './fimmun.jpg',
        link: 'https://fimmun.com',
      }
    ]
  },
  {
    title: 'Graphic Design',
    description: 'I create modern graphics that elevate your brand, from social media to print and digital content.',
    image3: './work2.jpg',
    info: 'My graphic design service focuses on crafting visuals that communicate clearly and stand out. I design logos, social media posts, banners, posters, packaging mockups, and more — all tailored to your brand. I mix color theory, typography, and layout principles to ensure every piece looks sharp and tells your story. Whether it\'s digital content or print-ready material, you get high-resolution, professional-grade graphics delivered in all necessary formats.',
    projects: [
      {
        title: 'ArtVogue',
        description: 'Modern visuals and product styling that aligned with the brand\'s clean aesthetic.',
        image: './artnvogue.png',
        link: 'https://artnvogue.com',
      }
    ]
  },
  {
    title: 'Web Animations & 3D',
    description: 'I add scroll-based animations, hover effects, and interactive 3D that make your site feel alive and modern.',
    image3: './work3.jpg',
    info: 'With web animations and 3D, I transform static websites into interactive, scroll-reactive experiences. Using GSAP, Framer Motion, and Three.js (R3F), I implement smooth transitions, page animations, and even 3D model interactions that enhance storytelling and engagement. These elements are optimized for performance and responsive across all devices. Whether it\'s animated hero sections, dynamic buttons, or immersive background effects — I make it move, feel alive, and stand out.',
    projects: [
      {
        title: 'Fimmun 2025',
        description: 'Scroll-based animation with product transitions and hover-based visual interactions.',
        image: './fimmun.jpg',
        link: 'https://fimmun.com',
      }
    ]
  },
  {
    title: 'Shopify Development',
    description: 'I build optimized and custom-themed Shopify stores ready for launch and sales.',
    image3: './work1.png',
    info: 'I help brands set up complete Shopify stores with custom themes, optimized product pages, secure checkout integration, and mobile-first responsiveness. I handle everything from domain setup and backend configuration to theme customization and performance improvements. I can also integrate custom JavaScript for advanced behaviors and animations, plus apps for reviews, inventory, and marketing. The result: a high-converting, brand-aligned online store that looks professional and functions flawlessly.',
    projects: [
      {
        title: 'ArtVogue',
        description: 'Shopify store with custom layout, optimized product structure, and integrated animations.',
        image: './artnvogue.png',
        link: 'https://artnvogue.com',
      }
    ]
  },
  {
    title: 'Full E-commerce Setup',
    description: 'I handle everything you need to launch your online store — from products and payments to design and delivery systems.',
    image3: './work2.jpg',
    info: 'I offer a complete e-commerce setup from scratch. This includes Shopify or custom store setup, product uploads, image optimization, categories, payment gateways, delivery options, and SEO setup. I also design your store for both mobile and desktop users, implement cart recovery, and ensure every part of the flow is seamless. It\'s a done-for-you solution — you send your content, and I deliver a ready-to-sell store.',
    projects: [
      {
        title: 'ArtVogue',
        description: 'End-to-end Shopify e-commerce setup with visual styling, product management, and sales tools.',
        image: './artnvogue.png',
        link: 'https://artnvogue.com',
      }
    ]
  }
];

function ProjectsLP() {
  const [hoveredService, setHoveredService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className='w-screen min-h-screen bg-gradient-to-br from-[#f2f2f2] via-[#e8e8e8] to-[#f8f8f8] relative overflow-hidden px-10 py-16'>
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-[#123123]/10 to-[#123123]/5 rounded-full blur-xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-[#123123]/8 to-[#123123]/3 rounded-full blur-lg"
        animate={{
          x: [0, -20, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Header Section */}
      <motion.div 
        className="text-center mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className='text-[50px] text-[#123123] Montserrat font-bold leading-tight mb-2 relative inline-block'
        >
          My Services
        </motion.h1>
        <motion.p 
          className='text-[15px] Poppins max-w-3xl mx-auto leading-relaxed text-[#123123]/80'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          "Design meets functionality." I blend creativity with technology to craft sleek, responsive, and user-centered experiences that leave a lasting impact. Let's build something amazing together! ✨
        </motion.p>
      </motion.div>

      {/* Main Services Container */}
      <div className="max-w-7xl mx-auto">
        {/* Services Grid - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Services List */}
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                className={`service-item relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  hoveredService === index 
                    ? 'bg-white shadow-2xl scale-105 border-2 border-[#123123]/20' 
                    : 'bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-102'
                }`}
                onMouseEnter={() => setHoveredService(index)}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Service Number */}
                <motion.div
                  className="absolute -top-3 -left-3 w-12 h-12 bg-gradient-to-br from-[#123123] to-[#123123]/80 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>

                {/* Service Content */}
                <div className="ml-8">
                  <h3 className="text-2xl font-bold text-[#123123] mb-3 Montserrat">
                    {job.title}
                  </h3>
                  <p className="text-[#123123]/70 Poppins leading-relaxed">
                    {job.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute top-1/2 -right-4 w-2 h-2 bg-[#123123] rounded-full"
                  animate={{
                    scale: hoveredService === index ? [1, 1.5, 1] : 1,
                    opacity: hoveredService === index ? [0.5, 1, 0.5] : 0.3
                  }}
                  transition={{ duration: 1, repeat: hoveredService === index ? Infinity : 0 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Right Column - Preview Panel */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {hoveredService !== null ? (
                <motion.div
                  key={hoveredService}
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 50, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="preview-panel bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-[#123123]/10 h-full"
                >
                  {/* Service Header */}
                  <div className="mb-8">
                    <motion.div
                      className="w-20 h-20 bg-gradient-to-br from-[#123123] to-[#123123]/80 rounded-2xl mb-6 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <span className="text-white text-3xl font-bold">{hoveredService + 1}</span>
                    </motion.div>
                    <motion.h2 
                      className="text-3xl font-bold text-[#123123] mb-4 Montserrat"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {jobs[hoveredService].title}
                    </motion.h2>
                  </div>

                  {/* Detailed Information */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <div>
                      <h4 className="text-xl font-semibold text-[#123123] mb-3 Montserrat">
                        What I Deliver
                      </h4>
                      <p className="text-[#123123]/80 Poppins leading-relaxed text-lg">
                        {jobs[hoveredService].info}
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-[#123123]/5 to-[#123123]/10 p-6 rounded-2xl">
                      <h5 className="text-lg font-semibold text-[#123123] mb-3 Montserrat">
                        Service Overview
                      </h5>
                      <p className="text-[#123123]/70 Poppins leading-relaxed">
                        {jobs[hoveredService].description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Project Showcase */}
                  <motion.div
                    className="mt-8 pt-8 border-t border-[#123123]/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h4 className="text-xl font-semibold text-[#123123] mb-4 Montserrat">
                      Featured Project
                    </h4>
                    <div className="flex flex-col lg:flex-row items-center gap-6">
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div
                          className="w-48 h-48 bg-cover bg-center rounded-2xl shadow-xl overflow-hidden"
                          style={{ backgroundImage: `url(${jobs[hoveredService].projects[0].image})` }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#123123]/20 to-transparent"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.8 }}
                        />
                      </motion.div>

                      <div className="flex-1 text-center lg:text-left">
                        <h5 className="text-xl font-bold text-[#123123] mb-2 Montserrat">
                          {jobs[hoveredService].projects[0].title}
                        </h5>
                        <p className="text-[#123123]/70 Poppins leading-relaxed mb-4">
                          {jobs[hoveredService].projects[0].description}
                        </p>
                        <motion.a
                          href={jobs[hoveredService].projects[0].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 bg-gradient-to-r from-[#123123] to-[#123123]/80 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Project →
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="preview-placeholder bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-[#123123]/10 h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      className="w-24 h-24 bg-gradient-to-br from-[#123123]/20 to-[#123123]/10 rounded-full mx-auto mb-6 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="text-[#123123]/50 text-4xl">👆</span>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-[#123123]/60 Montserrat mb-2">
                      Hover a Service
                    </h3>
                    <p className="text-[#123123]/50 Poppins">
                      Select any service from the left to see detailed information and featured projects
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Interactive Cursor Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-[#123123]/20 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  )
}

export default ProjectsLP