import { FIND_BY_PIN } from "../actions/types";

const initialState = {
  centerDetails: [],
};

const findByPin = (state = initialState, action) => {
  switch (action.type) {
    case FIND_BY_PIN:
      return {
        ...state,
        centerDetails: action.payload,
      };
    default:
      return state;
  }
};

export default findByPin;
