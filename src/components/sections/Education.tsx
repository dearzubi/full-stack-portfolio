import { motion } from 'framer-motion'
import { education } from '@/data/site.ts'
import { GraduationCap, Calendar } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export function Education() {
  return (
    <section id="education" className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <div className="mb-16 text-center">
            <motion.h2
              className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl"
              variants={itemVariants}
            >
              Education
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              My academic background and qualifications
            </motion.p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {education.map(edu => (
              <motion.div
                key={`${edu.school}-${edu.degree}`}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                variants={itemVariants}
              >
                <div className="mb-4 flex items-start">
                  <div className="mr-4 rounded-full bg-sky-50 p-3 dark:bg-sky-900/50">
                    <GraduationCap className="h-6 w-6 text-sky-500 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{edu.school}</p>
                  </div>
                </div>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="mr-2 h-4 w-4 text-sky-500 dark:text-sky-400" />
                  {edu.dates}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
