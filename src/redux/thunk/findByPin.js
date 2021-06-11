import { findByPin } from "../actions";

export const fetchCenterData = () => {
  return async function (dispatch, getState) {
    try {
      const response = await fetch(
        `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${
          getState().enteredPin.pin
        }&date=${getState().enteredPin.date}`
      );
      const json = await response.json();
      dispatch(findByPin(json.sessions));
    } catch (error) {
      console.log("error", error.message);
    }
  };
};
