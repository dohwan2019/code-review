import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
const Preview = props => {
    return (
        <div dangerouslySetInnerHTML={{__html: md.render(props.value)}} />
    );
};

class MarkEditor extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    value: ''
  };
}

  handleTextChange = ({target}) => {
    console.log(target.innerText);
    this.setState({
      value: target.innerText
    })
  }

    render() {
        return (<div>
            <h2>마크다운 에디터</h2>
            <Preview value={this.state.value}/>
            <div contentEditable={true} onKeyPress={this.handleTextChange}/>
        </div>);
    }
}

export default MarkEditor;
