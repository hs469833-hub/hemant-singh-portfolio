import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Hero = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-[28rem] h-[28rem] bg-blue-600 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-blue-700 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div ref={ref} className="container-custom relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
          {/* Left Side - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium backdrop-blur-sm">
                👋 Hello, I'm
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3">
              <span className="text-white">{data.name}</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl lg:text-4xl text-blue-400 font-semibold mb-6">
              {data.title}
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              {data.introduction}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 mb-12">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <Mail size={20} className="group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
              <button
                className="btn-secondary flex items-center justify-center gap-2 group"
                onClick={() => {
                  alert('Resume download functionality - Add your resume PDF to public/resume.pdf');
                }}
              >
                <Download size={20} className="group-hover:scale-110 transition-transform" />
                Download Resume
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-6">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-800/50 hover:bg-blue-500/20 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-slate-800/50 hover:bg-blue-500/20 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-4 rounded-2xl bg-slate-800/50 hover:bg-blue-500/20 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Rotating Gradient Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 opacity-75 blur-sm"></div>
              </motion.div>

              {/* Glow Effects */}
              <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
              <div className="absolute -inset-2 rounded-full bg-blue-400/30 blur-xl"></div>

              {/* Profile Image Container */}
              <motion.div
                className="relative w-[280px] h-[280px]"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                {/* Circular Frame */}
                <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-2 shadow-[0_0_60px_rgba(59,130,246,0.5)]">
                  <div className="w-full h-full rounded-full bg-slate-900 p-2">
                    <img
                      src="/profile.jpg"
                      alt={data.name}
                      className="w-full h-full rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                            <span class="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">HS</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-blue-400 transition-colors duration-300">
          <span className="text-sm mb-3 font-medium">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
