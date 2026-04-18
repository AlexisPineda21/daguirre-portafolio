import Footer from './components/Footer'
import Header from './components/Header'
import { portfolioData } from './data/portfolioData'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import RecognitionsSection from './sections/RecognitionsSection'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-transparent">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(171,147,122,0.18),transparent_32%),radial-gradient(circle_at_85%_20%,rgba(92,76,60,0.08),transparent_22%),linear-gradient(180deg,#f7f2ec_0%,#f3ece4_45%,#f8f4ee_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,transparent_0,transparent_calc(50%-640px),rgba(31,27,23,0.05)_calc(50%-640px),rgba(31,27,23,0.05)_calc(50%-639px),transparent_calc(50%-639px),transparent_calc(50%+639px),rgba(31,27,23,0.05)_calc(50%+639px),rgba(31,27,23,0.05)_calc(50%+640px),transparent_calc(50%+640px),transparent_100%)] opacity-70" />
      <Header
        name={portfolioData.hero.name}
        navigation={portfolioData.navigation}
        cta={portfolioData.hero.secondaryCta}
      />

      <main>
        <HeroSection hero={portfolioData.hero} />
        <AboutSection
          about={portfolioData.about}
          education={portfolioData.education}
          skills={portfolioData.skills}
          languages={portfolioData.languages}
        />
        <ProjectsSection
          sectionIntro={portfolioData.projectsIntro}
          projects={portfolioData.projects}
        />
        <RecognitionsSection
          sectionIntro={portfolioData.recognitionsIntro}
          recognitions={portfolioData.recognitions}
        />
        <ContactSection contact={portfolioData.contact} />
      </main>

      <Footer footer={portfolioData.footer} />
    </div>
  )
}

export default App
