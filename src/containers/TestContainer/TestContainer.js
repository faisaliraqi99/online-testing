import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { unsetTest, setTest, saveCurrentTask } from '../../storage/actions/actions';
import TestSingleContainer from '../TestSingleContainer/TestSingleContainer';
import './TestContainer.css'

class TestContainer extends Component {

  componentDidMount() {
    if(this.props.currentTask !== null) {

      let dataFromLocalStorage = JSON.parse(localStorage.getItem(`test-id-${this.props.currentTask.id}`));

      dataFromLocalStorage !== null ? this.props.setTest(dataFromLocalStorage) :
      localStorage.setItem(`test-id-${this.props.currentTask.id}`, JSON.stringify(this.props.currentTask));
    }
  }

  saveHandler = () => {
    this.props.saveCurrentTask()
    localStorage.setItem(`test-id-${this.props.currentTask.id}`, JSON.stringify(this.props.currentTaskEdited));
  }

  render() {
    const renderTasks = () => {
      if (this.props.currentTask !== null) {
        return (
          <div className="test-container">
            <div className="title-img" style={{ background: `url(${this.props.currentTask.img})  center center / contain no-repeat` }}></div>
            <div className="title-btn-test">
              <h2>{this.props.currentTask.title}</h2>
              <Link to="/"><button className="test-container-btn " onClick={this.props.closeTest}>Close</button></Link>
            </div>
            {this.props.currentTask.test.map((item, index) => (
              <TestSingleContainer key={index} index={index} />
            ))}
            <button className="test-container-btn save" onClick={this.saveHandler}>Save</button>
          </div>
        )
      } else {
        this.props.history.push('/');
        return <h1>Select the test</h1>
      }
    }
    return renderTasks();
  }

}

const mapStateToProps = state => {
  return {
    currentTask: state.data.currentTask,
    currentTaskEdited: state.data.currentTaskEdited
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeTest: () => dispatch(unsetTest()),
    setTest: (data) => dispatch(setTest(data)),
    saveCurrentTask: () => dispatch(saveCurrentTask())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);