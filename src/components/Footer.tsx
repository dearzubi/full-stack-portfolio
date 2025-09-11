import { profile } from '../data/site'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
