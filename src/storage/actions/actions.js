import axios from 'axios';

import { GET_ALL, SET_TEST, UNSET_TEST, SET_COMPLITED, SAVE_CURRENT_TASK } from './actionTypes';

const apiUrl = "http://localhost:3000/all";

export const getData = data => {
  return {
    type: GET_ALL,
    payload: data
  }
}

export const getAllData = () => {
  return dispatch => {
    return axios.get(apiUrl)
      .then(response => {
        dispatch(getData(response.data));
      })
      .catch(error => {
        throw (error);
      });
  };
}

export const setTest = test => {
  return {
    type: SET_TEST,
    payload: test
  }
}

export const unsetTest = () => {
  return {
    type: UNSET_TEST
  }
}

export const setComplited = (currentTask, event, index) => {

  const singleTestData = currentTask.test[index];
  const eventTarget = event.target;

  switch(eventTarget.name) {
    case 'option-test':

      let selectedOption = +eventTarget.options[eventTarget.selectedIndex].value;

      singleTestData.questions.forEach((item, optionIndex) => {
        if (optionIndex === selectedOption) {
          if (item.success === true) currentTask.test[index].isComplited = true;
          else if(item.success === false) currentTask.test[index].isComplited = false;
        }
      });

    break;
    case 'input-test':
      currentTask.test[index].text = eventTarget.value;
      if(currentTask.test[index].text !== '') currentTask.test[index].isComplited = true;
      else currentTask.test[index].isComplited = false;
    break;
    default: console.log('OTHER EVENT');
  }

  return {
    type: SET_COMPLITED,
    payload: currentTask
  }
}

export const saveCurrentTask = data => {
  return {
    type: SAVE_CURRENT_TASK
  }
}