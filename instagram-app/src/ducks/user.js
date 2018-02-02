import axios from "axios";
import { API_HOST } from "react-native-dotenv";

const initialState = {
  user: {},
  email: "",
  isLoading: false,
  didError: false
};

// ACTION TYPES

const LOGIN = "LOGIN";
const SAVE_EMAIL = "SAVE_EMAIL";

// ACTION CREATOR

export function handleLogin(email, password) {
  return {
    type: LOGIN,
    payload: axios
      .post(`${API_HOST}/api/login`, { email, password })
      .then(res => res.data)
      .catch(console.log)
  };
}

export function saveEmail(email) {
  return {
    type: SAVE_EMAIL,
    payload: email
  };
}

// REDUCER
export default function user(state = initialState, action = {}) {
  switch (action.type) {
    // LOGIN
    case `${LOGIN}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${LOGIN}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

    case `${LOGIN}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });
    // SAVE EMAIL TEMPORARY
    case SAVE_EMAIL:
      return Object.assign({}, state, {
        email: action.payload
      });

    default:
      return state;
  }
}
