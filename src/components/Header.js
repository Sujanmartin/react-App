import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
  const [show, setShow] = useState(false);




  return (

    <header className="bg-black sm:bg-blue-gray-500 md:bg-green-600 text-white flex justify-between px-7 py-2">
      <div>
        <h1 className="text-xl mb-2">National Geographic</h1>

        {show && <nav className="flex flex-col space-y-2">

          <NavLink to='/about'>About</NavLink>

          <NavLink to='/Contact'>Contact</NavLink>



        </nav>}

      </div>

      <button onClick={() => setShow(!show)}>{show ? <i className="fa-solid fa-bars hidden sm:flex"></i> : <i class="fa-regular fa-rectangle-xmark hidden sm:flex"></i>}</button>
      <nav className="sm:hidden">
        <NavLink to='/about'>About</NavLink>
      </nav>


    </header >
  )
}
export default Header