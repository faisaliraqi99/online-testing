import React, { Component } from 'react';
import { connect } from 'react-redux';

import { unsetTest } from '../../storage/actions/actions';
import TestSingleContainer from '../TestSingleContainer/TestSingleContainer';
import './TestContainer.css'

class TestContainer extends Component {
  state = {
    inputText: '',
  }
  saveTests = (data) => {
    let someData = localStorage.getItem(`test-id-${this.props.currentTask.id}`);
    console.log(someData)
    console.log(data)
  }
  render() {
    const renderTasks = () => {
      const thisData = localStorage.getItem(`test-id-${this.props.currentTask.id}`);
      if(thisData === null) {
        localStorage.setItem(`test-id-${this.props.currentTask.id}`, JSON.stringify(this.props.currentTask));
        const data = localStorage.getItem(`test-id-${this.props.currentTask.id}`);
        const jsonDataFromStorage = JSON.parse(data);
        return jsonDataFromStorage.test.map((item, index) => (
          <TestSingleContainer storage={thisData} key={index} data={item} index={index} />
        ))
      } else {
        const data = localStorage.getItem(`test-id-${this.props.currentTask.id}`);
        const jsonDataFromStorage = JSON.parse(data);
        return jsonDataFromStorage.test.map((item, index) => (
          <TestSingleContainer storage={thisData} key={index} data={item} index={index} />
        ))
      }
    }
    return (
      <div className="test-container">
        <div className="title-btn-test">
          <h2>{this.props.currentTask.title}</h2>
          <button className="test-container-btn " onClick={this.props.closeTest}>Close</button>
        </div>
        {renderTasks()}
        <button className="test-container-btn save" onClick={() => this.saveTests()}>Save</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeTest: () => dispatch(unsetTest())
  }
}

export default connect(null, mapDispatchToProps)(TestContainer);