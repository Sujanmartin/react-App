import React from "react"
const Section = ({ data, show }) => {


  return (
    <div>

      <h1>{data}</h1>
      <button onClick={show}>Alert Me</button>
      <h1>Section Pages</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores blanditiis animi! Ea eius impedit et reiciendis odit inventore, unde minima, quasi odio laudantium, necessitatibus sunt ipsum modi iste ad!</p>

    </div>
  )
}
export default Section