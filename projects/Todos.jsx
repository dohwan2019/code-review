import React from 'react';
import './Todos.css';

const Todos = (props) => {
  return (
    <div className="Todos">
      <h1>{props.title}</h1>
      <ul>
        {props.items.map((item, idx)=>{
          return (
            <li key={idx}><input type="checkbox"/>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos;

