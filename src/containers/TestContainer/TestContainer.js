import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { unsetTest, setTest } from '../../storage/actions/actions';
import TestSingleContainer from '../TestSingleContainer/TestSingleContainer';
import './TestContainer.css'

class TestContainer extends Component {
  state = {
    inputText: '',
  }
  componentDidMount() {
    if(this.props.targetTest !== null) {

      let someData = localStorage.getItem(`test-id-${this.props.targetTest.id}`);
      let jsonNewData = JSON.parse(someData);

      if(jsonNewData !== null) this.props.setTest(jsonNewData)
      else localStorage.setItem(`test-id-${this.props.targetTest.id}`, JSON.stringify(this.props.targetTest));

    }
  }
  saveTests = (data) => {
    // let someData = localStorage.getItem(`test-id-${this.props.targetTest.id}`);
  }
  render() {
    const renderTasks = () => {
      if(this.props.targetTest !== null) {
        let thisData = localStorage.getItem(`test-id-${this.props.targetTest.id}`);
        return (
          <div className="test-container">
            <div className="title-btn-test">
              <h2>{this.props.targetTest.title}</h2>
              <Link to="/"><button className="test-container-btn " onClick={this.props.closeTest}>Close</button></Link>
            </div>
            {this.props.targetTest.test.map((item, index) => (
              <TestSingleContainer storage={thisData} key={index} data={item} index={index} />
            ))}
            <button className="test-container-btn save" onClick={() => this.saveTests()}>Save</button>
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
    targetTest: state.data.currentTask
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeTest: () => dispatch(unsetTest()),
    setTest: (data) => dispatch(setTest(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);