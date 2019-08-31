import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { unsetTest, setTest } from '../../storage/actions/actions';
import TestSingleContainer from '../TestSingleContainer/TestSingleContainer';
import './TestContainer.css'

class TestContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputText: '',
      newData: null
    };
    // this.TestSingleContainer = React.createRef();
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
  // handleUpdate = () => {
  //   console.log(this.TestSingleContainer.current)
  // }
  saveTests = () => {
    if(this.state.newData !== null) {
      let checkedTest = this.state.newData.test.map(item => {
        switch (item.type) {
          case 'input': if (item.text !== '') item.isComplited = true;
            break;
          default: console.log('TEST CONTAINER ERROR', item);
        }
        return item;
      });
      let newState = {...this.state.newData};
      newState.test = checkedTest;

      this.props.setTest(this.state.newData);
      this.setTestToState(this.state.newData);
      localStorage.setItem(`test-id-${this.props.targetTest.id}`, JSON.stringify(this.state.newData));
    }
    this.handleUpdate();
  }
  renderTasks = () => {
    if(this.props.targetTest !== null) {
        return (
          <div className="test-container">
            <div className="title-img" style={{ background: `url(${this.props.targetTest.img})  center center / contain no-repeat`}}></div>
            <div className="title-btn-test">
              <h2>{this.props.targetTest.title}</h2>
              <Link to="/"><button className="test-container-btn " onClick={this.props.closeTest}>Close</button></Link>
            </div>
            {this.props.targetTest.test.map((item, index) => (
              <TestSingleContainer ref={this.superheroElement} setTestToState={this.setTestToState} key={index} index={index} />
            ))}
            <button className="test-container-btn save" onClick={() => this.saveTests()}>Save</button>
          </div>
        )
      } else {
        this.props.history.push('/');
        return <h1>Select the test</h1>
      }
  }

  render() {
    console.log('TestContainer updated')
    return this.renderTasks();
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