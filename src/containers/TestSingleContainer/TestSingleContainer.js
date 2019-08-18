import React, { Component } from 'react';

import './TestSingleContainer.css';

class TestSingleContainer extends Component {
  state = {
    newData: {}
  }
  changeData = (payload, eventType) => {
    const index = this.props.index;
    const item = JSON.parse(this.props.storage);
    if(eventType === 'input') {
      item.test[index].text = payload;
      let newData = item;
      this.setState({
        ...this.state,
        newData
      })
    } else if (eventType === 'change') {
      const optionChoosed = +payload.target.options[payload.target.selectedIndex].value;
      const completedOrNot = this.props.data.questions[optionChoosed];
      if (completedOrNot.success === true) {
        item.test[index].isComplited = true;
        let newData = item;
        this.setState({
          ...this.state,
          newData
        })
      } else {
        item.test[index].isComplited = false;
        let newData = item;
        this.setState({
          ...this.state,
          newData
        })
      }
    }
  }
  render() {
    console.log(this.state);
    const checkType = () => {
      let status = '';
      let onOff = '';
      if(this.props.data.type === "input") {
        let placeHold = 'Введите ответ';
        if(this.props.data.isComplited === true) {
          status = 'task-success';
          onOff = 'disabled';
        } else if(this.props.data.isComplited === false) {
          status = 'task-unsuccess'
          onOff = 'disabled';
        }
        if(this.props.data.text.length !== 0) placeHold = this.props.data.text;
        return (
          <div className="input-test">
            <h3>{this.props.index + 1}. {this.props.data.title}</h3>
            <input onInput={(event) => this.changeData(event.target.value, event.type)} disabled={onOff} id={status} type="text" placeholder={placeHold}></input>
          </div>
        );
      }
      if(this.props.data.type === "option") {
        const options = this.props.data.questions;
        if (this.props.data.isComplited === true) {
          status = 'task-success';
          onOff = 'disabled';
        } else if (this.props.data.isComplited === false) {
          status = 'task-unsuccess';
          onOff = 'disabled';
        }
        return (
          <div className="option-test">
            <h3>{this.props.index + 1}. {this.props.data.title}</h3>
            <select disabled={onOff} id={status} onChange={(event) => this.changeData(event, event.type)}>
              <option>Choose option</option>
              {options.map((item, index) => (
                <option key={index} value={index}>{item.text}</option>
              ))}
            </select>
          </div>
        )
      }
    }
    return <>{checkType()}</>
  }
}

export default TestSingleContainer;