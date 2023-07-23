import { NavLink, Outlet } from "react-router-dom"

const About = () => {
  return (
    <div className='space-x-5'>
      <NavLink to='/about'> About Home</NavLink>


      <h1>Aboutpage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi voluptas fuga placeat officia voluptatem earum accusantium recusandae doloribus qui iste explicabo aperiam repellendus praesentium illum, dolorum quas distinctio, animi debitis aut eum quisquam maiores, ea alias. Optio, labore laboriosam eos sit cupiditate repellendus vero pariatur sapiente, officiis error totam dignissimos.</p>
      <Outlet />
    </div>

  )
}
export default About