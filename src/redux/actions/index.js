import {
  LOAD_STATES,
  LOAD_DISTRICTS,
  SELECTED_STATE,
  FIND_BY_PIN,
  ENTERED_PIN,
  FIND_BY_DISTRICT,
  SELECTED_DISTRICT,
} from "./types";

export const loadStates = (states) => ({
  type: LOAD_STATES,
  payload: states,
});

export const loadDistricts = (districts) => ({
  type: LOAD_DISTRICTS,
  payload: districts,
});

export const selectedStates = (selectedState) => ({
  type: SELECTED_STATE,
  selectedState,
});

export const findByPin = (centerDetails) => ({
  type: FIND_BY_PIN,
  payload: centerDetails,
});

export const enteredPin = (pin, date) => ({
  type: ENTERED_PIN,
  pin,
  date,
});

export const findByDistrict = (centerDetails) => ({
  type: FIND_BY_DISTRICT,
  payload: centerDetails,
});

export const selectedDistrict = (district, date) => ({
  type: SELECTED_DISTRICT,
  district,
  date,
});
