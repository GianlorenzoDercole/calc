import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    num1: 5,
    num2: 5,
    sum: 10

  }
  setNum = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }
  add = (e) => {
    e.preventDefault()
    this.setState({sum: (parseInt(this.state.num1) + parseInt(this.state.num2))})
  }
  render() {

  return (
    <div className="caclulator">
    <h1>Add with React!</h1>

    <form onSubmit={this.calculate}>
        <input type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.setNum}
        />
        <span>+</span>
        <input type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.setNum}
        />
        <button onClick={this.add}>=</button>
        <h3>{this.state.sum}</h3>
    </form>
  </div>
  )
  }


}

export default Calculator
