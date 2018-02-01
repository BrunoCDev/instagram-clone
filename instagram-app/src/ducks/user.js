import axios from "axios";
import { API_HOST } from "react-native-dotenv";

const initialState = {
  user: {},
  test: false
};

// ACTION TYPES

const TEST = "TEST";

// ACTION CREATOR

export function tester() {
  return {
    type: TEST,
    payload: true
  };
}

// REDUCER
export default function user(state = initialState, action = {}) {
  switch (action.type) {
    // TEST
    case TEST:
      return Object.assign({}, state, {
        test: action.payload
      });

    default:
      return state;
  }
}
