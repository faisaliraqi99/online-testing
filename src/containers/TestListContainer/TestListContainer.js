import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setTest } from '../../storage/actions/actions';
import TestList from '../../components/TestList/TestList';

import TestContainer from '../TestContainer/TestContainer';
import './TestListContainer.css';

class TestListContainer extends Component {
  render() {
    const testList = () => {
      if(this.props.info.currentTask === null) {
        let list = this.props.info.tests.map((item, index) => (
          <TestList
            chooseTest={() => this.props.chooseTest(item)}
            data={item}
            key={index}
          />
        ));
        return <div className="grid-container">{list}</div>
      } else {
        return (
        <div className="container">
          <TestContainer currentTask={this.props.info.currentTask} />
        </div>
        )
      }
    }
    return testList()
  }
}

const mapStateToProps = state => {
  return {
    info: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chooseTest: obj => dispatch(setTest(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestListContainer);