import { loadStates } from "../actions";

export const fetchStatesData = () => {
  return async function (dispatch) {
    const response = await fetch(
      "https://cdn-api.co-vin.in/api/v2/admin/location/states"
    );
    const json = await response.json();
    dispatch(loadStates(json.states));
  };
};
