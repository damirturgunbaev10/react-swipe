import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './pages/intro/Intro'
import Logos from './pages/logos/Logos'
import Numbers from './pages/numbers/Numbers'
import Features from './pages/features/Features'
import Video from './pages/video/Video'
import Technologies from './pages/technologies/Technologies'
import Team from './pages/team/Team'
import Faq from './pages/faq/Faq'



const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Intro />
      <Logos />
      <Numbers />
      <Features />
      <Video />
      <Technologies />
      <Team />
      <Faq />
    </div>
  )
}

export default App