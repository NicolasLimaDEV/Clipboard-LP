import './index.css'
import React from 'react'

//Imports 
import Main from './Components/Main'
import SectionOne from './Components/SectionOne'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import SectionFor from './Components/SectionFor'
import Footer from './Components/Footer'

function App(){
  return(
    <div>
      <Main />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFor />
      <Footer />
    </div>
  )
}

export default App