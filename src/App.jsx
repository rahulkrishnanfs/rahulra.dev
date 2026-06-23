import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Recognition from './components/Recognition'
import Specialities from './components/Specialities'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Speaking from './components/Speaking'
import OpenSource from './components/OpenSource'
import Community from './components/Community'
import Leadership from './components/Leadership'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Recognition />
        <Specialities />
        <Skills />
        <Certifications />
        <Speaking />
        <OpenSource />
        <Community />
        <Leadership />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
