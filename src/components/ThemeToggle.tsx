import { Sun, Moon, Monitor } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    if (theme === 'light') return <Sun className="h-5 w-5" />
    if (theme === 'dark') return <Moon className="h-5 w-5" />
    return <Monitor className="h-5 w-5" />
  }

  const getLabel = () => {
    if (theme === 'light') return 'Light mode'
    if (theme === 'dark') return 'Dark mode'
    return 'System theme'
  }

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium text-gray-600 transition-colors hover:bg-sky-50 hover:text-sky-600 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-gray-300 dark:hover:bg-sky-900/50 dark:hover:text-sky-400"
      aria-label={`Toggle theme. Current theme: ${getLabel()}`}
      title={`Toggle theme. Current theme: ${getLabel()}`}
    >
      {getIcon()}
      <span className="sr-only">{getLabel()}</span>
    </button>
  )
}
