import React from 'react';
import {Checkbox, Icon, Input} from 'antd';

class TodoListItem extends React.Component {

  handleEditAction = (idx) => {
    console.log(document.getElementById(`nm${idx}`));

    let parentNode = document.getElementById(`nm${idx}`);
    let fChild = parentNode.childNodes.item(0);
    let sChild = parentNode.childNodes.item(1);

    console.log(parentNode, fChild, sChild);

    fChild.style.display = 'none';
    sChild.style.display = 'inline';
  }

  handleEdit = (idx, text) => {
    const {onEdit} = this.props;

    let parentNode = document.getElementById(`nm${idx}`);
    let fChild = parentNode.childNodes.item(0);
    let sChild = parentNode.childNodes.item(1);

    fChild.style.display = 'inline';
    sChild.style.display = 'none';

    onEdit(idx, text);
  }

  render() {
    const {name, completed, idx} = this.props.items;
    const {onDelete} = this.props;

    return (
      <div className="TodoListItem">
        <Checkbox defaultChecked={completed} />

        <span id={`nm${idx}`}>
          <span>{name}</span>
          <Input
            className='hidden'
            defaultValue={name}
            onPressEnter={e=>{
              this.handleEdit(idx, e.target.value);
            }} />
        </span>


        <Icon type={'edit'} className={'btn-edit'} onClick={()=>{this.handleEditAction(idx)}} />
        <Icon type={'delete'} className={'btn-delete'} onClick={(e)=>{console.log('delete', idx); onDelete(idx)}} />
      </div>
    );
  }
}

export default TodoListItem;
