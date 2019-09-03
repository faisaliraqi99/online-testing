import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputTest from '../../components/TestTypes/InputTest';
import OptionTest from '../../components/TestTypes/OptionTest';
import './TestSingleContainer.css';

import { setComplited } from '../../storage/actions/actions';

class TestSingleContainer extends Component {

  checkType = () => {

      let dataOfTest = this.props.currentTask.test[this.props.index];

      switch(dataOfTest.type){
        case 'input': 
        return (
          <InputTest data={{
            index: this.props.index,
            changeData: (obj) => this.saveData(obj),
            testData: dataOfTest
          }}/>
        );
        case 'option': return (
          <OptionTest data={{
            index: this.props.index,
            setComplitedAndSave: this.props.setComplitedAndSave,
            testData: dataOfTest
          }} />
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
    setComplitedAndSave: (obj) => dispatch(setComplited(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestSingleContainer);