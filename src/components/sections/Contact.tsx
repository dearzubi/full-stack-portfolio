import { motion } from 'framer-motion'
import { profile } from '@/data/site.ts'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Icon } from '@iconify/react'

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

export function Contact() {
  return (
    <section id="contact" className="bg-white py-24 dark:bg-gray-900">
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
              Get In Touch
            </motion.h2>
            <motion.p
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              Have a question or want to work together? Feel free to reach out!
            </motion.p>
          </div>

          <div className="flex w-full flex-col gap-4">
            <div className="flex w-full flex-wrap justify-between gap-4">
              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-sky-50 p-3 dark:bg-sky-900/50">
                  <Mail className="h-5 w-5 text-sky-500 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-gray-600 transition-colors hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-sky-50 p-3 dark:bg-sky-900/50">
                  <Phone className="h-5 w-5 text-sky-500 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Phone</p>
                  <a
                    href={`tel:${profile.phone}`}
                    className="text-gray-600 transition-colors hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-sky-50 p-3 dark:bg-sky-900/50">
                  <MapPin className="h-5 w-5 text-sky-500 dark:text-sky-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">{profile.location}</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="mr-4 rounded-full bg-sky-50 p-3 dark:bg-sky-900/50">
                  <Icon
                    icon={'streamline-ultimate:office-stamp-document'}
                    className="h-5 w-5 text-sky-500 dark:text-sky-400"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Right to Work</p>
                  <p className="text-gray-600 dark:text-gray-400">{profile.rightToWork}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
