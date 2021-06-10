import { SELECTED_DISTRICT } from "../actions/types";

const initialState = {
  district: "",
  date: "",
};

const selectedDistrict = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_DISTRICT:
      return {
        ...state,
        district: action.district,
        date: action.date,
      };
    default:
      return state;
  }
};

export default selectedDistrict;
