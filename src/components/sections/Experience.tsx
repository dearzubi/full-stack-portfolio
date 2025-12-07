import { motion } from 'framer-motion'
import { experience, ExperienceItem } from '@/data/site.ts'
import { CalendarDays, MapPin } from 'lucide-react'
import { Icon } from '@iconify/react'
import { getSkillIcon } from '@/utils'

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

export function Experience() {
  return (
    <section id="experience" className="bg-gray-50 py-24 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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
              Experience
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              My professional journey that shaped my expertise in software development and
              technology.
            </motion.p>
          </div>

          <motion.div className="mb-16" variants={itemVariants}>
            <h3 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Professional Experience
            </h3>

            <div className="space-y-12">
              {experience.map((exp: ExperienceItem) => (
                <motion.div
                  key={`${exp.company}-${exp.start}`}
                  className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                  variants={itemVariants}
                >
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <div className="mb-2 flex items-center gap-3">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {exp.role}
                        </h4>
                      </div>

                      <div className="mb-2 flex items-center gap-2">
                        <span className="font-semibold text-sky-600 dark:text-sky-400">
                          {exp.company}
                        </span>
                      </div>

                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <MapPin className="mr-1 h-4 w-4 text-sky-500 dark:text-sky-400" />
                        {exp.location}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <CalendarDays className="h-4 w-4 text-sky-500 dark:text-sky-400" />
                      <span className="font-medium">
                        {exp.start} - {exp.end}
                      </span>
                    </div>
                  </div>

                  {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
                    <div className="mb-6">
                      <h5 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                          >
                            <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-sky-500"></div>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {typeof exp.note === 'string' && (
                    <div className="mb-6">
                      <p className="mt-4 italic text-gray-500 dark:text-gray-400">{exp.note}</p>
                    </div>
                  )}

                  {Array.isArray(exp.technologies) && exp.technologies.length > 0 && (
                    <div>
                      <h5 className="mb-3 font-semibold text-gray-900 dark:text-gray-100">
                        Key Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(tech => (
                          <div
                            key={tech}
                            className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                          >
                            <Icon icon={getSkillIcon(tech)} width={16} height={16} />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
