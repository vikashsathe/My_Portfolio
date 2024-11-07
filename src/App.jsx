import React from 'react'
import Navbar from './landing_page/navbar/Navbar'
import Hero from './landing_page/hero/Hero'
import About from './landing_page/about/About'
import Services from './landing_page/services/Services'
import MyWork from './landing_page/mywork/MyWork'
import Contect from './landing_page/contect/Contect'
import Footer from './landing_page/footer/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contect />
      <Footer />
    </div>
  )
}

export default App