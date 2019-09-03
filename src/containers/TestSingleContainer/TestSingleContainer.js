import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputTest from '../../components/TestTypes/InputTest';
import OptionTest from '../../components/TestTypes/OptionTest';
import './TestSingleContainer.css';

class TestSingleContainer extends Component {
  state = {
    newData: {},
    update: true
  }
  updateState = () => {
    this.setState({...this.state, update: !this.state.update})
  }

  saveData = (obj)=>{
    console.log(obj, this.props.index, this.props.currentTask.test[this.props.index])
  }

  checkType = () => {

      let dataOfTest = this.props.currentTask.test[this.props.index];
      let status = '';
      let onOff = '';

      switch(dataOfTest.type){
        case 'input': 
        return (
          <InputTest data={{
            index: this.props.index,
            changeData: this.saveData,
            testData: dataOfTest
          }}/>
        );
        case 'option': return (
          <OptionTest data={{
            index: this.props.index,
            changeData: (obj) => this.saveData(obj),
            testData: dataOfTest
          }} />
        );
        default: ;
      }
  }
  render() {
    console.log('TestSingleContainer UPDATED')
    return this.checkType();
  }
}

const mapStateToProps = state => {
  return {
    currentTask: state.data.currentTask
  }
}

export default connect(mapStateToProps)(TestSingleContainer);