import './App.css';
import React, { Component } from 'react'
import Message from './components/Message.jsx'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Message name={ "Aaron" } message={ "im hungry" } num={ 3 }/>
      </div>
    )
    }
}

export default App