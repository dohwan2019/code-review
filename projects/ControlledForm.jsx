import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.ff = '';
  }

  handleSubmit(event) {
    alert(this.ff+"입력값을 서버로 전송합니다.");
    event.preventDefault();
  }

  handleInputChange = ({target}) => {
    this.ff=target.value;
  }

  render() {return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" onChange={this.handleInputChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )}
}

export default ControlledForm;
