import React, { Component } from 'react';
import { connect } from 'react-redux';

import { unsetTest } from '../../storage/actions/actions';
import TestSingleContainer from '../TestSingleContainer/TestSingleContainer';
import './TestContainer.css'

class TestContainer extends Component {
  render() {
    const tests = this.props.currentTask.test;
    const renderTasks = () => {
      localStorage.setItem(`test-id-${this.props.currentTask.id}`, JSON.stringify(this.props.currentTask))
      return tests.map((item, index) => (
        <TestSingleContainer key={index} data={item} index={index} />
      ))
    }
    return (
      <div className="test-container">
        TEST CONTAINER
        <div className="title-btn-test">
          <h2>{this.props.currentTask.title}</h2>
          <button className="test-container-btn " onClick={this.props.closeTest}>Close</button>
        </div>
        {renderTasks()}
        <button className="test-container-btn save" onClick={this.props.closeTest}>Save</button>
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