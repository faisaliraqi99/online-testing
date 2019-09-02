import React from 'react'

const InputTest = (props) => {

  const data = props.data.testData;
  const changeData = () => props.data.changeData();
  const index = props.data.index;

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
  return (
    <div className="input-test">
      <h3>{index + 1}. {data.title}</h3>
      <input onInput={(event) => changeData(event.target.value, event.type)} disabled={onOff} id={status} type="text" responseer={response}></input>
    </div>
  );
}

export default InputTest;