import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import './App.css'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/ui/footer'


function App() {

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Services />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
