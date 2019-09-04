import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputTest from '../../components/TestTypes/InputTest';
import OptionTest from '../../components/TestTypes/OptionTest';
import './TestSingleContainer.css';

import { setComplited } from '../../storage/actions/actions';

class TestSingleContainer extends Component {

  saveData = (obj)=>{
    // console.log(obj, this.props.index, this.props.currentTask.test[this.props.index])
  }

  checkType = () => {

      let currentTestData = this.props.currentTask;

      switch(currentTestData.test[+this.props.index].type){
        case 'input': 
        return (
          <InputTest data={{
            index: this.props.index,
            changeData: this.saveData,
            currentTestData: currentTestData
          }}/>
        );
        case 'option': return (
          <OptionTest data={{
            index: this.props.index,
            setComplitedAndSave: this.props.setComplitedAndSave,
            currentTestData: currentTestData
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