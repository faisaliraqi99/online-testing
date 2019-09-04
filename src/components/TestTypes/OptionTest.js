import React from 'react'

const OptionTest = (props) => {

  const index = props.data.index;
  const data = props.data.currentTestData;
  const dataOfSingleTest = data.test[index];
  const options = dataOfSingleTest.questions;
  const setComplitedAndSave = (obj) => props.data.setComplitedAndSave(obj);

  let onOff = '';
  let status = '';

  if (dataOfSingleTest.isComplited === true) {
    status = 'task-success';
    onOff = 'disabled';
  } else if (dataOfSingleTest.isComplited === false) {
    status = 'task-unsuccess'
    onOff = 'disabled';
  }

  const changeHandler = (event) => {
    setComplitedAndSave({data, event, index});
  }

  return (
    <div className="option-test">
      <h3>{index + 1}. {dataOfSingleTest.title}</h3>
      <select disabled={onOff} id={status} name="option-test" onChange={changeHandler}>-
        <option>Choose option</option>
        {options.map((item, index) => (
          <option key={index} value={index}>{item.text}</option>
        ))}
      </select>
    </div>
  );
}

export default OptionTest;