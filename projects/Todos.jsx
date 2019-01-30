import React from 'react';
import './Todos.css';

class Todos extends React.Component {
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const {title, items, isUnmount} = this.props;
    console.log({isUnmount});
    return (
      <div className="Todos">
        <h1>{title}</h1>
        <ul>
          {items.map((item, idx)=>{
            return (
              <li key={idx}><input type="checkbox" checked={isUnmount?"checked":""} readOnly/>{item.name} -> {isUnmount?"완료":"미완료"}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Todos;
