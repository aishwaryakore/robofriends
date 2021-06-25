import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>{this.props.greetings}</p>
            </div>
        );
    }
}

export default Hello;