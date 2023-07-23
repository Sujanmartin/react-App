import { useFormik } from "formik"
import React, { useState } from "react"
import some, { hello } from '../dummy/sample'
import { useSelector } from "react-redux"
const HomePages = () => {





  const dat = useSelector((store) => store);
  console.log(dat);
  const [data, setData] = useState([]);


  const formik = useFormik({
    initialValues: {
      todo: ''
    },
    onSubmit: (val, { resetForm }) => {
      setData([...data, val.todo])
      resetForm();
    }
  });
  console.log(data);
  console.log(some);

  return (
    <div className="p-5">
      <h1 className="text-2xl">Sample Todo App</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="space-y-2">
          <label htmlFor="">Add Todo Activities</label>
          <br />
          <input
            onChange={formik.handleChange}
            value={formik.values.todo}
            name="todo"
            id="todo"
            type="text" className="border border-black outline-none px-2 py-1" />
        </div>
        {data.map((d, i) => {
          return <h1 className="text-3xl" key={i}>{i + 1}{d}</h1>
        })}
      </form>
    </div>
  )
}
export default HomePages