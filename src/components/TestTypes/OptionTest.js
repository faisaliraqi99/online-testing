import React from 'react'

const OptionTest = (props) => {

  const { currentTask, index, setComplitedAndSave } = props;
  const thisTestData = currentTask.test[index];
  const options = thisTestData.questions;

  let onOff = '';
  let status = '';

  if (thisTestData.isComplited === true) {
    status = 'task-success';
    onOff = 'disabled';
  } else if (thisTestData.isComplited === false) {
    status = 'task-unsuccess'
    onOff = 'disabled';
  }

  const changeHandler = (event) => {
    setComplitedAndSave(currentTask, event, index);
  }

  return (
    <div className="option-test">
      <h3>{index + 1}. {thisTestData.title}</h3>
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