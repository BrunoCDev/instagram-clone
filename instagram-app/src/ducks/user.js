import axios from "axios";
import { API_HOST } from "react-native-dotenv";

const initialState = {
  user: {},
  email: "",
  username: "",
  isLoading: false,
  didError: false
};

// ACTION TYPES

const LOGIN = "LOGIN";
const SAVE_EMAIL = "SAVE_EMAIL";
const CREATE_ACCOUNT = "CREATE_ACCOUNT";
const CHECK_USERNAME = "CHECK_USERNAME";
const CREATE_USERNAME = "CREATE_USERNAME";
const UPDATE_USERNAME = "UPDATE_USERNAME";

// ACTION CREATOR

export function handleLogin(email, password) {
  return {
    type: LOGIN,
    payload: axios
      .post(`${API_HOST}/api/users/login`, { email, password })
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

export function createAccount(fullName, password, email) {
  return {
    type: CREATE_ACCOUNT,
    payload: axios
      .post(`${API_HOST}/api/users/create`, { fullName, password, email })
      .then(res => res.data)
      .catch(console.log)
  };
}

export function checkUsername(username) {
  return {
    type: CHECK_USERNAME,
    payload: axios
      .get(`${API_HOST}/api/users/check/${username}`)
      .then(res => res.data)
      .catch(console.log)
  };
}

export function createUsername(username, id) {
  return {
    type: CREATE_USERNAME,
    payload: axios
      .post(`${API_HOST}/api/users/username/create`, { username, id })
      .then(res => res.data)
      .catch(console.log)
  };
}

export function updateUsername(username, id) {
  return {
    type: UPDATE_USERNAME,
    payload: axios
      .post(`${API_HOST}/api/users/username/update`, { username, id })
      .then(res => res.data)
      .catch(console.log)
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
      if (action.payload) {
        return Object.assign({}, state, {
          isLoading: false,
          user: action.payload
        });
      }

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

    // CREATE ACCOUNT
    case `${CREATE_ACCOUNT}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${CREATE_ACCOUNT}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: action.payload
      });

    case `${CREATE_ACCOUNT}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    // CHECK USERNAME
    case `${CHECK_USERNAME}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${CHECK_USERNAME}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        username: action.payload
      });

    case `${CHECK_USERNAME}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    // CREATE USERNAME
    case `${CREATE_USERNAME}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${CREATE_USERNAME}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        username: action.payload
      });

    case `${CREATE_USERNAME}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    // CREATE USERNAME
    case `${UPDATE_USERNAME}_PENDING`:
      return Object.assign({}, state, {
        isLoading: true
      });

    case `${UPDATE_USERNAME}_FULFILLED`:
      return Object.assign({}, state, {
        isLoading: false,
        user: { ...state.user, username: action.payload.username }
      });

    case `${UPDATE_USERNAME}_REJECTED`:
      return Object.assign({}, state, {
        isLoading: false,
        didError: true
      });

    default:
      return state;
  }
}
