import React from 'react';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
const Preview = props => {
    return (
        <div dangerouslySetInnerHTML={{__html: md.renderer(props.value)}} />
    );
};

class MarkEditor extends React.Component {
    render() {
        return (<div>
            <h2>마크다운 에디터</h2>
            <Preview value={'# markdown-it'}/>
            <input type="text" value=""/>
        </div>);
    }
}

export default MarkEditor;