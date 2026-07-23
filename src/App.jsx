import { useState } from 'react'
import "../public/styles.css"
import './App.css'
import Header from "./components/Header/Header"
import AlertSection from "./components/alertSection/alertSection"
import FirstSection from './components/firstSection/firstSection'
import SecondSection from './components/secondSection/secondSection'
import ThirdSection from './components/thirdSection/thirdSection'
import FourthSection from './components/fourthSection/fourthSection'
import FifthSection from './components/fifthSection/fifthSection'
import SixthSection from './components/sixthSection/sixthSection'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
       <Header />
       <AlertSection />
       <FirstSection />
       <SecondSection />
       <ThirdSection />
       <FourthSection />
       <FifthSection />
       <SixthSection />

       <Footer />
    </>
  )
}

export default App
