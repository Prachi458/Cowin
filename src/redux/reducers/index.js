import { combineReducers } from "redux";
import states from "./states";
import districts from "./districts";
import selectedStates from "./selectedState";
import findByPin from "./findByPin";
import enteredPin from "./enteredPin";
import findByDistrict from "./findByDistrict";
import selectedDistrict from "./selectedDistrict";

const rootReducer = combineReducers({
  states,
  districts,
  selectedStates,
  findByPin,
  enteredPin,
  findByDistrict,
  selectedDistrict,
});

export default rootReducer;
