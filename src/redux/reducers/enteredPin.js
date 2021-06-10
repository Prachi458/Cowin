import { ENTERED_PIN } from "../actions/types";

const initialState = {
  pin: "",
  date: "",
};

const enteredPin = (state = initialState, action) => {
  switch (action.type) {
    case ENTERED_PIN:
      return {
        ...state,
        pin: action.pin,
        date: action.date,
      };
    default:
      return state;
  }
};

export default enteredPin;
