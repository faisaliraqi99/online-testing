import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputTest from '../../components/TestTypes/InputTest';
import OptionTest from '../../components/TestTypes/OptionTest';
import './TestSingleContainer.css';

import { setComplited } from '../../storage/actions/actions';

class TestSingleContainer extends Component {

  checkType = () => {

      let currentTask = {...this.props.currentTask};

      switch(currentTask.test[this.props.index].type){
        case 'input':
        return (
          <InputTest
            index={this.props.index}
            setComplitedAndSave={this.props.setComplitedAndSave}
            currentTask={currentTask}
          />
        );
        case 'option':
        return (
          <OptionTest
            index={this.props.index}
            setComplitedAndSave={this.props.setComplitedAndSave}
            currentTask={currentTask}
          />
        );
        default: ;
      }
  }
  render() {
    return this.checkType();
  }
}

const mapStateToProps = state => {
  return {
    currentTask: state.data.currentTask
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setComplitedAndSave: (data,event,index) => dispatch(setComplited(data,event,index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSingleContainer);