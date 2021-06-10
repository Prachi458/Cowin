import { loadDistricts } from "../actions";

export const fetchDistrictsData = () => {
  return async function (dispatch, getState) {
    const response = await fetch(
      `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${
        getState().selectedStates.selectedState
      }`
    );
    const json = await response.json();
    dispatch(loadDistricts(json.districts));
  };
};
