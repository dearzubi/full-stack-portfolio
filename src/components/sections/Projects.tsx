import { motion } from 'framer-motion'
import { projects, Project } from '@/data/site.ts'
import { ExternalLink } from 'lucide-react'
import { Icon } from '@iconify/react'
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

const featuredProjects = projects.filter(project => project.isFeatured)
const otherProjects = projects.filter(project => !project.isFeatured)

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 dark:bg-gray-900">
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
              Featured Projects
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              A selection of projects that showcase my skills in full-stack development, and modern
              web technologies.
            </motion.p>
          </div>

          <div className="mb-24 space-y-24">
            {featuredProjects.map((project: Project, index: number) => (
              <motion.div
                key={project.name}
                className={`grid grid-cols-1 items-center gap-16 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                variants={itemVariants}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="object-fit h-80 w-full rounded-2xl"
                      />
                    ) : (
                      <div className="flex h-80 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/50 dark:to-sky-800/50">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-700">
                          <span className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                            {project.name.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-sm font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-400">
                      {project.category || 'Full Stack'}
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                    {project.name}
                  </h3>

                  <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex flex-wrap gap-3">
                      {project.stack.slice(0, 10).map(tech => (
                        <div
                          key={tech}
                          className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          <Icon icon={getSkillIcon(tech)} width={16} height={16} />
                          {tech}
                        </div>
                      ))}
                      {project.stack.length > 10 && (
                        <div className="flex items-center rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          +{project.stack.length - 10} more
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700"
                      >
                        Visit Website
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    )}

                    {typeof project.githubLink === 'string' && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
                      >
                        <Icon icon={'logos:github-icon'} className="mr-2 h-4 w-4" />
                        View Code
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </a>
                    )}
                    {Array.isArray(project.githubLink) &&
                      project.githubLink.length > 0 &&
                      project.githubLink.map((repo, index) => (
                        <a
                          key={index}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
                        >
                          <Icon icon={'logos:github-icon'} className="mr-2 h-4 w-4" />
                          {repo.label}
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </a>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {otherProjects.length > 0 && (
            <>
              <motion.div className="mb-16 text-center" variants={itemVariants}>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100 md:text-4xl">
                  More Projects
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {otherProjects.map((project: Project) => (
                  <motion.div
                    key={project.name}
                    className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900"
                    variants={itemVariants}
                  >
                    <div className="mb-6 overflow-hidden rounded-2xl">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.name}
                          className="object-fit h-48 w-full transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-48 items-center justify-center bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/50 dark:to-sky-800/50">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg dark:bg-gray-700">
                            <span className="text-2xl font-bold text-sky-600 dark:text-sky-400">
                              {project.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      {project.category && (
                        <span className="mb-3 inline-block w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/50 dark:text-sky-400">
                          {project.category}
                        </span>
                      )}

                      <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-sky-600 dark:text-gray-100 dark:group-hover:text-sky-400">
                        {project.name}
                      </h3>

                      <p className="mb-4 text-gray-600 dark:text-gray-400">{project.description}</p>

                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.slice(0, 10).map(tech => (
                            <div
                              key={tech}
                              className="flex items-center gap-1 rounded-lg bg-gray-50 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            >
                              <Icon icon={getSkillIcon(tech)} width={12} height={12} />
                              {tech}
                            </div>
                          ))}
                          {project.stack.length > 10 && (
                            <div className="flex items-center rounded-lg bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                              +{project.stack.length - 10}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex flex-1 items-center justify-center rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700"
                          >
                            Visit Website
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        )}

                        {typeof project.githubLink === 'string' && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
                          >
                            <Icon icon={'logos:github-icon'} className="mr-2 h-4 w-4" />
                            View Code
                            <ExternalLink className="ml-2 h-3 w-3" />
                          </a>
                        )}
                        {Array.isArray(project.githubLink) &&
                          project.githubLink.length > 0 &&
                          project.githubLink.map((repo, index) => (
                            <a
                              key={index}
                              href={repo.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500"
                            >
                              <Icon icon={'logos:github-icon'} className="mr-2 h-4 w-4" />
                              {repo.label}
                              <ExternalLink className="ml-2 h-3 w-3" />
                            </a>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}
