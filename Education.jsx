import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Education</h2>
          <p className="section-subtitle">My academic journey</p>

          <div className="max-w-4xl mx-auto">
            {data.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-primary-400 to-primary-600" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] top-0 w-3 h-3 rounded-full bg-primary-600 border-4 border-white dark:border-dark-900" />

                <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ml-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      <Calendar size={16} />
                      {edu.duration}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <GraduationCap size={20} className="text-primary-600" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={20} className="text-primary-600" />
                      <span>Noida, India</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-gray-400">CGPA:</span>
                      <span className="font-bold text-primary-600 dark:text-primary-400">{edu.cgpa}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mt-4">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
