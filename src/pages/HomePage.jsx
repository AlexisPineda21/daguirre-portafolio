import AboutSection from '../sections/AboutSection'
import ContactSection from '../sections/ContactSection'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import RecognitionsSection from '../sections/RecognitionsSection'

function HomePage({ data }) {
  return (
    <main>
      <HeroSection hero={data.hero} />
      <AboutSection
        about={data.about}
        education={data.education}
        skills={data.skills}
        languages={data.languages}
      />
      <ProjectsSection
        sectionIntro={data.projectsIntro}
        projects={data.projects}
      />
      <RecognitionsSection
        sectionIntro={data.recognitionsIntro}
        recognitions={data.recognitions}
      />
      <ContactSection contact={data.contact} />
    </main>
  )
}

export default HomePage
