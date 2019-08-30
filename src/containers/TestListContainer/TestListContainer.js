import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setTest } from '../../storage/actions/actions';
import TestList from '../../components/TestList/TestList';

import './TestListContainer.css';

class TestListContainer extends Component {
  render() {
    const testList = () => {
      let list = this.props.info.tests.map((item, index) => (
        <Link to="/test" key={index}>
          <TestList
            chooseTest={() => this.props.chooseTest(item)}
            data={item}
            key={index}
          />
        </Link>
      ));
      return <div className="grid-container">{list}</div>
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