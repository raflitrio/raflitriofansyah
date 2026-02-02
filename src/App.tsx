import Navbar from './component/navbar'
import { TopographyBackground } from "./components/ui/topography"
import { AnimatedSection } from './components/AnimatedSection'
import About from './sections/about'
import Projects from './sections/project'
import Certificate from './sections/certificate'
import Contact from './sections/contact'
import Hobby from './sections/hobby'


function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <TopographyBackground>
        <div className="pt-16">
          {/* All Sections with scroll animations */}
          <AnimatedSection animation="fade-up">
            <About />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <Projects />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <Certificate />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <Hobby />
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <Contact />
          </AnimatedSection>
          
          {/* Footer */}
          <AnimatedSection animation="fade-in" delay={100}>
            <footer className="bg-gray-900 border-t border-green-400/30 py-8 px-4">
              <div className="max-w-6xl mx-auto text-center text-gray-400">
                <p>Thanks for visiting my portfolio!</p>
              </div>
            </footer>
          </AnimatedSection>
        </div>
      </TopographyBackground>
    </div>
  )
}

export default App