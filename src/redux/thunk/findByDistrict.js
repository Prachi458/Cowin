import { findByDistrict } from "../actions";

export const fetchCenterData = () => {
  return async function (dispatch, getState) {
    const response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${
        getState().selectedDistrict.district
      }&date=${getState().selectedDistrict.date}`
    );
    const json = await response.json();
    dispatch(findByDistrict(json.sessions));
  };
};
