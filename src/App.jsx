import React, { Component } from 'react'
import "./App.css"

export class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            toggle: false
        }
    }

    add = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    minus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }

    toggle = () => {
        this.setState(prevState => {
            return {
                toggle: !prevState.toggle
            }
        })
    }

    render() {
        return (
        <div className="App">

            <h1>Help Us Count</h1>
            <h1>{ this.state.count }</h1>

            <button onClick={ this.add }>+</button>
            <button onClick={ this.minus }>-</button>
            <button onClick={ this.reset }>Reset</button><br/><br/>

            <div style={{ height: "100px", backgroundColor: this.state.toggle ? "blue" : "red" }}>
                <button onClick={ this.toggle }>Toggle { this.state.toggle }</button>
            </div>
            

        </div>
        )
    }
}

export default App
