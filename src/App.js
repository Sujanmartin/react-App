
import React from "react";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footerpage from "./pages/Footerpage";
import { Route, Routes } from "react-router";
import About from "./pages/About";


const App = () => {
  const mino = 'hello';
  return (
    <>

      <Header />

      <h1>{mino}</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<About />} />




      </Routes>

    </>
  )
}
export default App
