import React from 'react'

const InputTest = (props) => {

  const index = props.data.index;
  const data = props.data.currentTestData;
  const dataOfSingleTest = data.test[index];
  const changeData = () => props.data.changeData();

  let onOff = '';
  let status = '';
  let response = 'Введите ответ';

  if (dataOfSingleTest.isComplited === true) {
    status = 'task-success';
    onOff = 'disabled';
  } else if (dataOfSingleTest.isComplited === false) {
    status = 'task-unsuccess'
    onOff = 'disabled';
  }
  if(dataOfSingleTest.text.length !== 0) response = dataOfSingleTest.text;
  return (
    <div className="input-test">
      <h3>{index + 1}. {dataOfSingleTest.title}</h3>
      <input onInput={(event) => changeData(event.target.value, event.type)} disabled={onOff} id={status} type="text" responseer={response}></input>
    </div>
  );
}

export default InputTest;