import { SELECTED_STATE } from "../actions/types";

const initialState = {
  selectedState: "",
};

const selectedStates = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_STATE:
      return {
        ...state,
        selectedState: action.selectedState,
      };
    default:
      return state;
  }
};

export default selectedStates;
