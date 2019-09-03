import axios from 'axios';

import { GET_ALL, SET_TEST, UNSET_TEST, SET_COMPLITED } from './actionTypes';

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

export const setComplited = (obj) => {
  const data = obj.data;
  const eventTarget = obj.event.target;
  const testType = obj.event.target.name;
  console.log(data);
  console.log(testType);
  switch(testType) {
    case 'option-test':
      let selectedOption = eventTarget.options[eventTarget.selectedIndex].value;
    break;
    default:
      console.log('OTHER EVENT')
    break;
  }
  return {
    type: SET_COMPLITED,
    payload: obj.data
  }
}