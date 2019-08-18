import React from 'react';

const TestList = ({ data, chooseTest, currentTask }) => {
  return (
    <div className="test-item" onClick={chooseTest}>
      <div>{data.title}</div>
    </div>
  );
}

export default TestList;