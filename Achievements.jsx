import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Target, Code, Award } from 'lucide-react';

const Achievements = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const icons = {
    "Research Papers Published": <Trophy size={32} />,
    "Data Science Projects": <Code size={32} />,
    "Certifications": <Award size={32} />,
    "Internships Completed": <Target size={32} />,
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Achievements</h2>
          <p className="section-subtitle">Milestones and accomplishments</p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl p-6 text-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex justify-center">
                  {icons[achievement.label] || <Award size={32} />}
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5, type: "spring" }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {achievement.number}
                </motion.div>
                <p className="text-sm md:text-base font-medium opacity-90">
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
