import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
//import TodoList from './components/TodoList';
//import Timer from './components/Timer';

/*
const data = [
  {name:"React 개발에 필요한 환경을 구축한다.", completed:true, color: 'red'},
  {name:"새로운 자바스크립트 문법을 익힌다.", completed:true, color: 'red'},
  {name:"개발 편의를 위한 VSCode IDE를 익힌다.", completed:false, color: 'red'},
  {name:"기본적인 Git 사용법을 익힌다.", completed:true, color: 'red'},
  {name:"PR 코드 리뷰를 응용한 개발 프로세스를 익힌다.", completed:false, color: 'red'},
  {name:"React 로 간단한 노트 앱을 만들어본다.", completed:true, color: 'red'}
];
*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnmount:true
    };
  }


  /*
  componentDidMount() {
    setTimeout(()=> {
      this.setState({
        isUnmount:true
      });
    }, 5000);

    setTimeout(()=> {
      this.setState({
        isUnmount:false
      });
    }, 10000);
  }
*/

  /*
  handleComplete = () => {
    this.setState({
      isUnmount:false
    });
  }
*/
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

/*
{this.state.isUnmount &&
          <Timer expireDate={'2019-01-30T14:57:00+09:00'} onComplete={this.handleComplete}/>
        }

         <TodoList title={"강의목표"}
                  items={data} isUnmount={this.state.isUnmount}
        />
*/

export default App;
