import React from 'react';
import TodoList from './components/TodoList';
import styled from 'styled-components';
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

class TodoListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items : [],
      itemsIt : 0
    }
  }

  componentDidMount() {
    console.log("TodoListPage componentDidMount");
    let items = JSON.parse(localStorage.getItem("items"));
    let itemsIt = localStorage.getItem("itemsIt");

    console.log('aa', items);

    if(items !== null) {
      console.log('vv');
      this.setState({
        items: [...items],
        itemsIt: itemsIt
      });
    }else{
      localStorage.setItem("items", JSON.stringify(this.state.items));
      localStorage.setItem("itemsIt", this.state.itemsIt);
    }
  }

  handleAddText = text => {
    if(text === '') return;
    else{
      let items = JSON.parse(localStorage.getItem("items"));
      let itemsIt = localStorage.getItem("itemsIt");

      console.log('handleAddText before', items);

        if(items !== null) {
          // 같은 값 검사
          let pass = true;
          for (let i = 0; i < items.length; i++) {
            console.log(items[i].name, text);
            if (items[i].name === text) {
              pass = false;
              break;
            }
          }

          if (pass) {
            itemsIt = Number(itemsIt) + 1;
            items = [...items, {name: text, completed: true, idx: itemsIt}];
            this.setState({
              items: [...items],
              itemsIt: itemsIt
            });

            localStorage.setItem("items", JSON.stringify(items));
            localStorage.setItem("itemsIt", itemsIt);
          }
        }else{
          console.log('wow');
        }

      console.log('handleAddText after', items);
      }
  }

  handleDelete = idx => {
    let items = JSON.parse(localStorage.getItem("items"));

    let deleteIndex = -1;
    for (let i = 0; i < items.length; i++) {
      if (items[i].idx === idx) {
        deleteIndex = i;
        break;
      }
    }

    if(deleteIndex != -1) {
      items.splice(deleteIndex, 1);

      this.setState({
        items: items
      });

      localStorage.setItem("items", JSON.stringify(items));
    }

  }

  handleEdit = (idx, text) => {
    console.log('TodoListPage handleEdit');
    let items = JSON.parse(localStorage.getItem("items"));

    let editIndex = -1;
    for (let i = 0; i < items.length; i++) {
      if (items[i].idx === idx) {
        editIndex = i;
        break;
      }
    }

    items[editIndex].name = text;

    this.setState({
      items: [...items]
    });

    localStorage.setItem("items", JSON.stringify(items));
  }

  render() {
    return (
      <Page>
        <TodoList items={this.state.items === null?[]:this.state.items}
                  addCall={this.handleAddText}
                  onDelete={this.handleDelete}
                  onEdit={this.handleEdit}
        />
      </Page>
    );
  }
}

export default TodoListPage;
