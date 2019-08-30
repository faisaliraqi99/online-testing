import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { unsetTest, setTest } from '../../storage/actions/actions';
import TestSingleContainer from '../TestSingleContainer/TestSingleContainer';
import './TestContainer.css'

class TestContainer extends Component {
  state = {
    inputText: '',
    newData: null
  }
  componentDidMount() {
    if(this.props.targetTest !== null) {

      let someData = localStorage.getItem(`test-id-${this.props.targetTest.id}`);
      let jsonNewData = JSON.parse(someData);

      jsonNewData !== null ? this.props.setTest(jsonNewData) :
      localStorage.setItem(`test-id-${this.props.targetTest.id}`, JSON.stringify(this.props.targetTest));

    }
  }
  setTestToState = (data) => {
    this.setState({...this.state, newData: data})
  }
  saveTests = () => {
    if(this.state.newData !== null) {
      let checkedTest = this.state.newData.test.map(item => {
        switch (item.type) {
          case 'input': if (item.text !== '') item.isComplited = true;
            break;
        }
        return item;
      });
      let newState = {...this.state.newData};
      newState.test = checkedTest;

      this.props.setTest(this.state.newData);
      localStorage.setItem(`test-id-${this.props.targetTest.id}`, JSON.stringify(this.state.newData));
    }
  }
  render() {
    const renderTasks = () => {
      if(this.props.targetTest !== null) {
        return (
          <div className="test-container">
            <div className="title-btn-test">
              <h2>{this.props.targetTest.title}</h2>
              <Link to="/"><button className="test-container-btn " onClick={this.props.closeTest}>Close</button></Link>
            </div>
            {this.props.targetTest.test.map((item, index) => (
              <TestSingleContainer setTestToState={this.setTestToState} key={index} index={index} />
            ))}
            <button className="test-container-btn save" onClick={this.saveTests}>Save</button>
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