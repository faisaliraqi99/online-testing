import React, { Component } from 'react';
import { connect } from 'react-redux';

import './TestSingleContainer.css';

class TestSingleContainer extends Component {
  state = {
    newData: {},
    update: true
  }
  updateState = () => {
    this.setState({...this.state, update: !this.state.update})
  }
  changeData = (payload, eventType) => {

    const index = this.props.index;
    const item = this.props.currentTask;
    const dataOfTest = this.props.currentTask.test[this.props.index];

    if(eventType === 'input') {
      item.test[index].text = payload;
      let newData = item;
      this.setState({
        ...this.state,
        newData
      })
    } else if (eventType === 'change') {
      const optionChoosed = +payload.target.options[payload.target.selectedIndex].value;
      const completedOrNot = dataOfTest.questions[optionChoosed];
      if (completedOrNot.success === true) {
        item.test[index].isComplited = true;
        let newData = item;
        this.setState({
          ...this.state,
          newData
        })
        localStorage.setItem(`test-id-${item.id}`, JSON.stringify(newData));
      } else {
        item.test[index].isComplited = false;
        let newData = item;
        this.setState({
          ...this.state,
          newData
        })

        localStorage.setItem(`test-id-${item.id}`, JSON.stringify(newData));
      }
    }
    this.props.setTestToState(this.state.newData)
  }

  checkType = () => {

      let dataOfTest = this.props.currentTask.test[this.props.index];
      let status = '';
      let onOff = '';

      switch(dataOfTest.type){
        case 'input': 
          let placeHold = 'Введите ответ';
          if (dataOfTest.isComplited === true) {
            status = 'task-success';
            onOff = 'disabled';
          } else if (dataOfTest.isComplited === false) {
            status = 'task-unsuccess'
            onOff = 'disabled';
          }
          if (dataOfTest.text.length !== 0) placeHold = dataOfTest.text;
          return (
            <div className="input-test">
              <h3>{this.props.index + 1}. {dataOfTest.title}</h3>
              <input onInput={(event) => this.changeData(event.target.value, event.type)} disabled={onOff} id={status} type="text" placeholder={placeHold}></input>
            </div>
          );
        case 'option': 
          const options = dataOfTest.questions;
          if (dataOfTest.isComplited === true) {
            status = 'task-success';
            onOff = 'disabled';
          } else if (dataOfTest.isComplited === false) {
            status = 'task-unsuccess';
            onOff = 'disabled';
          }
          return (
            <div className="option-test">
              <h3>{this.props.index + 1}. {dataOfTest.title}</h3>
              <select disabled={onOff} id={status} onChange={(event) => this.changeData(event, event.type)}>-
              <option>Choose option</option>
                {options.map((item, index) => (
                  <option key={index} value={index}>{item.text}</option>
                ))}
              </select>
            </div>
          );
        default: ;
      }
  }
  render() {
    console.log('TestSingleContainer UPDATED')
    return <>{this.checkType()}</>
  }
}

const mapStateToProps = state => {
  return {
    currentTask: state.data.currentTask
  }
}

export default connect(mapStateToProps)(TestSingleContainer);