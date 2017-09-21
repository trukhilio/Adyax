import React, { Component } from 'react';

export default class Button extends Component{
    render(){
        return(
            <button
                className={this.props.className}
                title={this.props.title}
                type={this.props.type}
                onClick={this.props.onClick}>
                    {this.props.children}
            </button>
        )
    }
}