import React from 'react';
import logo from '../logo.svg';
import './Header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRolling: true, title: "LIKE" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this);
    this.setState({
      isRolling: this.title === "LOVE" ? true : false,
      title: this.title === "LOVE" ? "LIKE" : "LOVE"
    })
  }

  render() {
    const {isRolling, title} = this.state;

    console.log(isRolling);

    return (
      <header className="Header">
        <div onClick={this.handleClick}>
          <img src={logo}
          className={`App-logo ${isRolling ? 'rotate' : ''}`}
               alt="logo"
          />
          <h1 className="App-title">{title}</h1>
        </div>
      </header>
    )
  }
}

export default Header;
