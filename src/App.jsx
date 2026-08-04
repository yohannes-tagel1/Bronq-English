import React from "react";
import "./App.css";
import LayoutPage from "./components/LayoutPage";
import HeaderPage from "./components/HeaderPage";
import FooterPage from "./components/FooterPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutPage />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React from 'react'
// import './App.css'
// import LayoutPage from './components/LayoutPage'
// import HeaderPage from './components/HeaderPage'
// import FooterPage from './components/FooterPage'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Homepage from './page/Homepage'
// import About from './page/About'
// import Blog from './page/Blog'
// import Contact from './page/Contact'

// function App() {

//   return (
//    <>
//    {/* <LayoutPage />
//    <HeaderPage />
//    <FooterPage/> */}
//    {/* <Homepage />
//    <About />
//    <Blog />
//    <Contact />
//    <HeaderPage />
//    <FooterPage/>   */}
//    <BrowserRouter>
//    <Routes>
//     <Route  element={<LayoutPage />} />
//     <Route path="/" element={<Homepage />} />
//     <Route path="/about" element={<About/>} />
//     <Route path="/blog" element={<Blog/>} />
//     <Route path="/contact" element={<Contact/>} />

//    </Routes>
//    </BrowserRouter>

//    </>
//   )
// }

// export default App
