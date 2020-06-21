import React, { Component } from 'react'

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN
console.log({GITHUB_TOKEN})
class App extends Component {
  render(){
    return (
      <div>
        Hello graphql
      </div>
    )
  }
}

export default App
