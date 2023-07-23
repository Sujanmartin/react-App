import React from "react"
import { useLocation, useParams } from "react-router"


const Detail = () => {


  const { idMeal } = useParams();
  console.log(idMeal);

  const { state } = useLocation();
  console.log(state);






  return (
    <div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo rerum culpa omnis officiis ad nihil eius quaerat officia quasi veritatis! Hic, laborum! Labore obcaecati, soluta, commodi veniam fugit incidunt dolore deleniti enim possimus repellat doloribus, adipisci dignissimos aspernatur cum quaerat! Sit, dolorem sapiente a similique quod molestias voluptatem vitae, quos fuga deserunt corporis debitis, repellendus eum tenetur tempore quisquam hic provident error beatae vel consequuntur. Voluptatum perferendis non optio quos. Rem odio exercitationem sit, quisquam aliquid, earum necessitatibus natus nam error accusantium commodi maiores aliquam sequi vero illum fugiat consequatur totam delectus nesciunt quo. Dolorum minima odit quidem excepturi beatae!</p>



    </div>
  )
}
export default Detail