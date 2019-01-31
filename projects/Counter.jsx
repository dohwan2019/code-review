import React, {PureComponent} from 'react';
import {Button} from 'antd';
import './Counter.less';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.count = 0;
    this.state = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    const {list} = this.state;
    let num = Math.random() * 1000;
    num = Math.ceil(num);
    console.log(num);
    list.push(num);

    this.setState({
      list: list,
    });

    this.forceUpdate();
  };

  render() {
    console.log('render...');
    return (
      <div className="Counter">
        <header className="App-header">
          {this.state.list.map((item, idx) => {
            return <div>{item}</div>;
          })}
          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}
export default Counter;
