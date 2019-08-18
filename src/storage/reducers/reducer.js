import { GET_ALL, SET_TEST, UNSET_TEST } from '../actions/actionTypes';

const initialState = {
  users: [],
  tests: [],
  currentTask: null
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        users: action.payload.users,
        tests: action.payload.tests
      };
    case SET_TEST:
      return {
        ...state,
        currentTask: action.payload
      };
    case UNSET_TEST:
      return {
        ...state,
        currentTask: null
      }
    default:
      return state;
  }
}