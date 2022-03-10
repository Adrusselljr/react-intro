import React, { Component } from 'react'

export class MessageChild extends Component {
    render() {
        return (
        <div>
            <h4 style={ styles.messageH }>Hello World from MessageChild!</h4>
            <p style= {{ fontFamily: "Gill Sans" }}>Favorite number is { this.props.num }</p>
        </div>
        )
    }
}

const styles = {
    messageH: {
        fontFamily: "Gill Sans"
    }
}

export default MessageChild
