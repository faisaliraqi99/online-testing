import axios from 'axios';

import { GET_ALL, SET_TEST, UNSET_TEST } from './actionTypes';

const apiUrl = "http://localhost:3000/all";

export const getData = data => {
  return {
    type: GET_ALL,
    payload: data
  }
}

export const getAllData = () => {
  return (dispatch) => {
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