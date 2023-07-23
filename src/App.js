import React from "react"
import { Route, Routes } from "react-router"
import HomePages from "./pages/HomePages"
import About2 from "./pages/About2"

import About from "./pages/About"
import RootLayout from "./pages/RootLayout"
import ContactPage from "./pages/ContactPage"
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePages />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Detail/:idMeal" element={<Detail />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<ContactPage />} />


        </Route>



      </Routes >
      <ToastContainer position="top-right" autoClose='1000' />

    </>

  )
}
export default App