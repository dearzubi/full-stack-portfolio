import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import { ThemeToggle } from './ThemeToggle'
import { profile } from '../data/site'

const navItems = [
  { name: 'Home', href: '#home', icon: 'lucide:home' },
  { name: 'Skills', href: '#skills', icon: 'lucide:code' },
  { name: 'Experience', href: '#experience', icon: 'lucide:briefcase' },
  { name: 'Projects', href: '#projects', icon: 'lucide:user' },
  { name: 'Education', href: '#education', icon: 'lucide:graduation-cap' },
  { name: 'Contact', href: '#contact', icon: 'lucide:mail' },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['home', 'skills', 'experience', 'projects', 'education', 'contact']
      const sectionElements = sections.map(id => document.getElementById(id))

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          // Consider a section active if it's within the top 50% of the viewport
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
      setActiveSection(href.substring(1))
    }
  }

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200 bg-white/90 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/90'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#home"
              className="group flex items-center"
              onClick={e => {
                e.preventDefault()
                scrollToSection('#home')
              }}
            >
              <span className="bg-gradient-to-r from-sky-500 to-sky-600 bg-clip-text text-xl font-bold text-transparent">
                {profile.name}
              </span>
            </a>
          </div>

          <nav className="hidden items-center space-x-1 md:flex">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="group relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300"
                  onClick={e => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Background effect - active or hover */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                      isActive
                        ? 'bg-sky-50 opacity-100 dark:bg-sky-900/50'
                        : 'bg-sky-50 opacity-0 group-hover:opacity-100 dark:bg-sky-900/50'
                    }`}
                  />

                  <div className="relative z-10 flex items-center space-x-2">
                    <Icon
                      icon={item.icon}
                      className={`h-4 w-4 transition-colors ${
                        isActive
                          ? 'text-sky-600 dark:text-sky-400'
                          : 'text-gray-600 group-hover:text-sky-600 dark:text-gray-300 dark:group-hover:text-sky-400'
                      }`}
                    />
                    <span
                      className={`transition-colors ${
                        isActive
                          ? 'text-sky-600 dark:text-sky-400'
                          : 'text-gray-600 group-hover:text-sky-600 dark:text-gray-300 dark:group-hover:text-sky-400'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                  {!isActive && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-sky-500"
                      whileHover={{ width: '80%', x: '-50%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <motion.button
              className="relative rounded-lg p-2 text-gray-600 transition-all duration-300 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              whileHover={{
                scale: 1.1,
                backgroundColor: 'rgb(240, 249, 255)',
              }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon icon="lucide:x" className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon icon="lucide:menu" className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-gray-200 bg-white/95 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/95 md:hidden"
          >
            <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
              <nav className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1)
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      className={`group flex items-center space-x-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive ? 'bg-sky-50 dark:bg-sky-900/50' : ''
                      }`}
                      onClick={e => {
                        e.preventDefault()
                        scrollToSection(item.href)
                      }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={
                        !isActive
                          ? {
                              scale: 1.02,
                              backgroundColor: 'rgb(240, 249, 255)',
                            }
                          : { scale: 1.02 }
                      }
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon
                        icon={item.icon}
                        className={`h-5 w-5 ${
                          isActive
                            ? 'text-sky-600 dark:text-sky-400'
                            : 'text-sky-600 dark:text-sky-400'
                        }`}
                      />
                      <span
                        className={`transition-colors ${
                          isActive
                            ? 'text-sky-600 dark:text-sky-400'
                            : 'text-gray-900 group-hover:text-sky-600 dark:text-gray-100 dark:group-hover:text-sky-400'
                        }`}
                      >
                        {item.name}
                      </span>
                    </motion.a>
                  )
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
