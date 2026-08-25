import { useState } from 'react'
import "../public/styles.css"
import './App.css'
import AlertSection from "./components/alertSection/alertSection"
import FirstSection from './components/firstSection/firstSection'
import SecondSection from './components/secondSection/secondSection'
import ThirdSection from './components/thirdSection/thirdSection'
import FourthSection from './components/fourthSection/fourthSection'
import FifthSection from './components/fifthSection/fifthSection'
import SixthSection from './components/sixthSection/sixthSection'
import YoutubeVideos from './components/YoutubeVideos/YoutubeVideos'


function MainComponent() {
  return (
    <>
       <AlertSection />
       <FirstSection />
       <SecondSection />
       <ThirdSection />
       <FourthSection />
       <FifthSection />
       <SixthSection />
       <YoutubeVideos />
    </>
  )
}

export default MainComponent
