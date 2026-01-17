import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Icon } from '@iconify/react'
import { profile } from '@/data/site.ts'
import { getSkillIcon } from '@/utils'

const topSkills = profile.coreTechnologies

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

const handleDownloadCV = () => {
  const a = document.createElement('a')
  a.href = '/Zubair_Khalid_CV.pdf'
  a.download = 'Zubair_Khalid_CV.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden bg-white pt-24 dark:bg-gray-900"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-600 dark:text-gray-400"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/*<motion.div*/}
          {/*  className="mb-8 flex items-center text-sm text-gray-600 dark:text-gray-400"*/}
          {/*  variants={itemVariants}*/}
          {/*>*/}
          {/*  <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>*/}
          {/*  <span>Open to work</span>*/}
          {/*</motion.div>*/}

          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <motion.h1
                className="mb-6 flex flex-col text-5xl font-bold leading-tight lg:text-6xl xl:text-7xl"
                variants={itemVariants}
              >
                <span className="text-gray-900 dark:text-gray-100">Hi, I'm </span>
                <span className="bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </motion.h1>

              <motion.h2
                className="mb-6 text-xl font-medium text-gray-700 dark:text-gray-300 lg:text-2xl"
                variants={itemVariants}
              >
                {profile.title}
              </motion.h2>

              <motion.p
                className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600 dark:text-gray-400"
                variants={itemVariants}
              >
                {profile.blurb}
              </motion.p>

              {/* Core Technologies */}
              <motion.div className="mb-10" variants={itemVariants}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {topSkills.map((skill, index) => {
                    return (
                      <motion.span
                        key={skill}
                        className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-sky-50 hover:text-sky-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-sky-900/50 dark:hover:text-sky-400"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.1 * index + 0.5,
                          duration: 0.3,
                          type: 'spring',
                          stiffness: 200,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon icon={getSkillIcon(skill)} width={16} height={16} />
                        {skill}
                      </motion.span>
                    )
                  })}
                </div>
              </motion.div>

              <motion.div className="mb-8" variants={itemVariants}>
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg px-2 py-1 text-gray-600 transition-all duration-300 hover:scale-105 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400"
                    whileHover={{
                      backgroundColor: 'rgb(240, 249, 255)',
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="GitHub (@dearzubi)"
                  >
                    <Icon icon="lucide:github" className="h-5 w-5" />
                    <span className="text-sm font-medium">@dearzubi</span>
                  </motion.a>

                  <motion.a
                    href={profile.links.githubAlt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg px-2 py-1 text-gray-600 transition-all duration-300 hover:scale-105 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400"
                    whileHover={{
                      backgroundColor: 'rgb(240, 249, 255)',
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="GitHub (@coolpengwing)"
                  >
                    <Icon icon="lucide:github" className="h-5 w-5" />
                    <span className="text-sm font-medium">@coolpengwing</span>
                  </motion.a>

                  <motion.a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 rounded-lg px-2 py-1 text-gray-600 transition-all duration-300 hover:scale-105 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400"
                    whileHover={{
                      backgroundColor: 'rgb(240, 249, 255)',
                    }}
                    transition={{ duration: 0.3 }}
                    aria-label="LinkedIn"
                  >
                    <Icon icon="lucide:linkedin" className="h-5 w-5" />
                    <span className="text-sm font-medium">zubair-khalid</span>
                  </motion.a>
                </div>
              </motion.div>

              <motion.div className="mb-8 flex flex-col gap-4 sm:flex-row" variants={itemVariants}>
                <motion.button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-sky-600 hover:shadow-xl dark:bg-sky-600 dark:hover:bg-sky-700"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </motion.button>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-sky-300 hover:text-sky-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-sky-500 dark:hover:text-sky-400"
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
              <div>
                <p className="mt-4 italic text-gray-500 dark:text-gray-400">
                  Legally authorised to work in the UK, no sponsorship required. Available for
                  remote, hybrid, or Manchester-based roles.
                </p>
              </div>
            </div>

            <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="relative h-80 w-80 lg:h-96 lg:w-96">
                  <motion.div
                    className="h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-sky-200 to-sky-300 p-2 shadow-2xl"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="h-full w-full overflow-hidden rounded-full bg-white">
                      <img
                        src="/dp.png"
                        alt={profile.name}
                        className="h-full w-full object-cover object-center"
                        style={{
                          objectPosition: 'center center',
                          transform: 'rotate(0deg)',
                          imageOrientation: 'from-image',
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
