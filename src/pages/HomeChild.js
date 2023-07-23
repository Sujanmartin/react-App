import React, { memo } from "react"
const HomeChild = ({ greet, age }) => {
  const person = {
    id: 1,
    sub: 'Hello'
  };
  greet();
  const { id, sub } = person;
  console.log('Hello this is home child');
  return (
    <div>
      <h1>Hello This Is Home</h1>
      <p>{age}</p>
    </div>
  )
}
export default memo(HomeChild)