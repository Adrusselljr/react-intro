import React, { Component } from 'react'
import MessageChild from './MessageChild'

export class Message extends Component {
    render() {
        return (
        <div>
            <h1>Hello World from Message!</h1>
            <p>The name is { this.props.name }</p>
            <p>The message is { this.props.message }</p>
            <p>The num is { this.props.num }</p>
            <p>{ this.props.name } { this.props.message } { this.props.num }</p>
            <MessageChild num={ this.props.num }/>
        </div>
        )
    }
}

export default Message