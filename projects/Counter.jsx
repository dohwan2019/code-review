import React, {PureComponent} from 'react';
import {Button} from 'antd';
import './Counter.less';

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.count = 0;
    this.ff = {
      open: false,
      list: [1, 2, 3, 4, 5],
    };
  }

  handleClick = e => {
    const {list} = this.ff;
    let num = Math.random() * 1000;
    num = Math.ceil(num);
    console.log(num);
    list.push(num);

    this.ff.list=list;


  };

  render() {
    console.log('render...');
    return (
      <div className="Counter">
        <header className="App-header">
          {this.ff.list.map((item, idx) => {
            return <div>{item}</div>;
          })}
          <Button onClick={this.handleClick}>카운터</Button>
        </header>
      </div>
    );
  }
}
export default Counter;
