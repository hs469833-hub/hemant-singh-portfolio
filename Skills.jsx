import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    { title: "Programming Languages", skills: data.programmingLanguages, color: "from-blue-500 to-blue-600" },
    { title: "Data Science & Analytics", skills: data.dataScience, color: "from-green-500 to-green-600" },
    { title: "Machine Learning & AI", skills: data.machineLearning, color: "from-purple-500 to-purple-600" },
    { title: "Databases", skills: data.databases, color: "from-orange-500 to-orange-600" },
    { title: "Web & Development", skills: data.webDevelopment, color: "from-pink-500 to-pink-600" },
    { title: "Tools", skills: data.tools, color: "from-cyan-500 to-cyan-600" },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title gradient-text">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      className="px-3 py-1.5 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:from-primary-100 hover:to-primary-200 dark:hover:from-primary-900 dark:hover:to-primary-800 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Progress Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Skill Proficiency</h3>
            <div className="space-y-4">
              {[
                { name: "Python", level: 90 },
                { name: "SQL", level: 85 },
                { name: "Machine Learning", level: 80 },
                { name: "Data Visualization", level: 85 },
                { name: "Power BI", level: 75 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{skill.level}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                    className="h-2 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
