import React from 'react'

const InputTest = (props) => {

  const data = props.data.testData;
  const index = props.data.index;
  const options = data.questions;
  const setComplitedAndSave = (obj) => props.data.setComplitedAndSave(obj);

  let onOff = '';
  let status = '';

  if (data.isComplited === true) {
    status = 'task-success';
    onOff = 'disabled';
  } else if (data.isComplited === false) {
    status = 'task-unsuccess'
    onOff = 'disabled';
  }

  const changeHandler = (event) => {
    setComplitedAndSave({data, event, index});
  }

  return (
    <div className="option-test">
      <h3>{index + 1}. {data.title}</h3>
      <select disabled={onOff} id={status} name="option-test" onChange={changeHandler}>-
        <option>Choose option</option>
        {options.map((item, index) => (
          <option key={index} value={index}>{item.text}</option>
        ))}
      </select>
    </div>
  );
}

export default InputTest;