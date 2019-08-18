import React, { Component } from 'react';

import './TestSingleContainer.css';

class TestSingleContainer extends Component {
  render() {
    const checkInput = () => {
      console.log(this.props.data)
      if(this.props.data.type === "input") {
        return (
          <div className="input-test">
            <h3>{this.props.index + 1}. {this.props.data.title}</h3>
            <input type="text" placeholder="Введите ответ"></input>
          </div>
        );
      }
      if(this.props.data.type === "option") {
        return (
          <div className="option-test">
            <h3>{this.props.index + 1}. {this.props.data.title}</h3>
            <select>
              <option>Select the option</option>
              <option>First</option>
              <option>Sec</option>
            </select>
          </div>
        )
      }
    }
    return (
      <>
        {checkInput()}
      </>
    );
  }
}

export default TestSingleContainer;