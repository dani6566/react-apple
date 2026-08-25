import { useState } from 'react'
import "../public/styles.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from "./components/Header/Header"
import Footer from './components/footer/Footer'
import MainComponent from "./mainComponent"
import Iphone from "./components/Iphone/Iphone"
import NotFoundFile from './components/404';
import SingleProduct from './components/Iphone/SingleProduct';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/iphone/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFoundFile />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;