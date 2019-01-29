import React from 'react';
import './Todos.css';

const Todos = (props) => {
    return (
        <div className="Todos">
            <h1>{props.title}</h1>
            <ul>
                {props.items.map((item, idx)=>{
                    return (
                        <li key={idx}>{item.name} -> {item.completed?"완료":"미완료"}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todos;

