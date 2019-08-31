import React from 'react';

const TestList = ({ data, chooseTest, currentTask }) => {
  return (
    <div className="test-item" onClick={chooseTest}>
      <img src={data.img} alt="logos"/>
      <div>{data.title}</div>
    </div>
  );
}

export default TestList;