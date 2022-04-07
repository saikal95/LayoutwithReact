import React from "react";





export default function TodoItem({ todo, index}){
  return <li> {index + 1}. {todo.title} </li>
}