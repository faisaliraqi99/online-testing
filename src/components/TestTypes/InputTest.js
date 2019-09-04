import React from 'react'

const InputTest = (props) => {

  const { currentTask, index, setComplitedAndSave } = props;

  const data = currentTask.test[index];

  let onOff = '';
  let status = '';
  let response = 'Введите ответ';

  if (data.isComplited === true) {
    status = 'task-success';
    onOff = 'disabled';
  } else if (data.isComplited === false) {
    status = 'task-unsuccess'
    onOff = 'disabled';
  }

  if(data.text.length !== 0) response = data.text;

  const inputHandler = event => {
    setComplitedAndSave(currentTask, event, index)
  }
  return (
    <div className="input-test">
      <h3>{index + 1}. {data.title}</h3>
      <input name="input-test" onInput={inputHandler} disabled={onOff} id={status} type="text" placeholder={response}></input>
    </div>
  );
}

export default InputTest;