import { Header } from '../components/Header'
import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { Experience } from '../components/sections/Experience'
import { Projects } from '../components/sections/Projects'
import { Education } from '../components/sections/Education'
import { Contact } from '../components/sections/Contact'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
