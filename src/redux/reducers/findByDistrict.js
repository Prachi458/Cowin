import { FIND_BY_DISTRICT } from "../actions/types";

const initialState = {
  centerDetails: [],
};

const findByDistrict = (state = initialState, action) => {
  switch (action.type) {
    case FIND_BY_DISTRICT:
      return {
        ...state,
        centerDetails: action.payload,
      };
    default:
      return state;
  }
};

export default findByDistrict;
