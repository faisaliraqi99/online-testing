import { GET_ALL, SET_TEST, UNSET_TEST, SET_COMPLITED, SAVE_CURRENT_TASK } from '../actions/actionTypes';

const initialState = {
  users: [],
  tests: [],
  currentTask: null,
  currentTaskEdited: null
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
        currentTask: action.payload,
        currentTaskEdited: action.payload
      };
    case UNSET_TEST:
      return {
        ...state,
        currentTask: null
      };
    case SET_COMPLITED:
      return {
        ...state,
        currentTaskEdited: action.payload
      }
    case SAVE_CURRENT_TASK:
      return {
        ...state,
        currentTask: state.currentTaskEdited
      }
    default:
      return state;
  }
}