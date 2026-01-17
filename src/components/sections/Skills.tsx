import { motion } from 'framer-motion'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { skills } from '@/data/site.ts'
import { getSkillIcon } from '@/utils'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
} as const

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(skills)[0])

  return (
    <section id="skills" className="bg-gray-50 py-24 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="mb-16 text-center">
            <motion.h2
              className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl"
              variants={itemVariants}
            >
              Skills & Technologies
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              A comprehensive overview of my technical expertise and the technologies I work with.
            </motion.p>
          </div>

          <motion.div className="mb-12 flex flex-wrap justify-center gap-3" variants={itemVariants}>
            {Object.keys(skills).map(category => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`chip-tab ${
                  activeCategory === category
                    ? 'bg-sky-500 text-white shadow-lg dark:bg-sky-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                } rounded-full px-6 py-3 text-sm font-medium transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {category}
                <span
                  className={`ml-2 rounded-full px-2 py-0.5 text-xs ${
                    activeCategory === category
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}
                >
                  {skills[category as keyof typeof skills].length}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            key={activeCategory}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {skills[activeCategory as keyof typeof skills].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="group flex flex-col items-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                >
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Icon icon={getSkillIcon(skill)} width={32} height={32} />
                  </div>
                  <span className="text-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="mt-20 text-center" variants={itemVariants}>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Always learning and exploring new technologies to stay current with industry trends.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
