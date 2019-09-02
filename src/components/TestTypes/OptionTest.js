import React from 'react'

const InputTest = (props) => {

  const data = props.data.testData;
  const changeData = () => props.data.changeData();
  const index = props.data.index;
  const options = data.questions;

  let onOff = '';
  let status = '';

  if (data.isComplited === true) {
    status = 'task-success';
    onOff = 'disabled';
  } else if (data.isComplited === false) {
    status = 'task-unsuccess'
    onOff = 'disabled';
  }

  return (
    <div className="option-test">
      <h3>{index + 1}. {data.title}</h3>
      <select disabled={onOff} id={status} onChange={(event) => changeData(event, event.type)}>-
        <option>Choose option</option>
        {options.map((item, index) => (
          <option key={index} value={index}>{item.text}</option>
        ))}
      </select>
    </div>
  );
}

export default InputTest;