import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Brain, BarChart3, Target, Lightbulb } from 'lucide-react';

const About = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = {
    "Data Science & Analytics": <Database size={24} />,
    "Machine Learning & Deep Learning": <Brain size={24} />,
    "Power BI & Data Visualization": <BarChart3 size={24} />,
    "Python & SQL Programming": <Code2 size={24} />,
    "NLP & LLM Applications": <Lightbulb size={24} />,
    "AI & Generative AI": <Brain size={24} />,
    "Problem Solving & Critical Thinking": <Target size={24} />,
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {data.summary}
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Key Focus Areas
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {data.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 p-4 bg-white dark:bg-dark-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="text-primary-600 dark:text-primary-400">
                        {icons[highlight] || <Target size={24} />}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative flex flex-col items-center"
            >
              {/* Profile Image with Glowing Border */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-xl opacity-75 animate-pulse" />
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 shadow-2xl hover:shadow-primary-500/50 transition-shadow duration-300">
                  <img 
                    src="/profile.jpg" 
                    alt="Hemant Singh" 
                    className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      console.error('Image failed to load');
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full rounded-full bg-white dark:bg-dark-800 flex items-center justify-center"><span class="text-5xl font-bold gradient-text">HS</span></div>';
                    }}
                  />
                </div>
              </div>

              {/* Glassmorphism Card */}
              <div className="w-full bg-white/10 dark:bg-dark-900/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 dark:border-white/10">
                <div className="text-center space-y-4">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">Hemant Singh</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">Data Scientist | AI & ML Enthusiast</p>
                  <div className="pt-4 border-t border-gray-200 dark:border-dark-700 space-y-2">
                    <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                      📍 Noida, India
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
                      📧 hs469833@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
