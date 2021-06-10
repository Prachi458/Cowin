import { LOAD_STATES } from "../actions/types";

const initialState = {
  states: [],
};

const states = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_STATES:
      return {
        ...state,
        states: action.payload,
      };
    default:
      return state;
  }
};

export default states;
