import React from 'react'
import ReactDom from 'react-dom';

function Hello(props) {
    return <h1>Hello, {props.name}</h1>
}
const element = <Hello name="fita lux" />;

ReactDom.render(element, document.getElementById('root'));

export default Hello