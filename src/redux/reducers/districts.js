import { LOAD_DISTRICTS } from "../actions/types";

const initialState = {
  districts: [],
};

const districts = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DISTRICTS:
      return {
        ...state,
        districts: action.payload,
      };
    default:
      return state;
  }
};

export default districts;
