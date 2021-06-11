import React, { useState } from "react";
import "./searchByDistrict.css";
import { fetchDistrictsData } from "../../redux/thunk/loadDistricts";
import { fetchCenterData } from "../../redux/thunk/findByDistrict";
import { Select, Grid, MenuItem, Button, makeStyles } from "@material-ui/core";
import { selectedStates } from "../../redux/actions";
import { selectedDistrict } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import FilterButtons from "./filterButtons";
import Moment from "moment";

const SearchByDistrict = () => {
  const [state, setState] = useState("Select State");
  const [district, setDistrict] = useState("Select District");
  const [isSubmit, setIsSubmit] = useState(false);
  const date1 = new Date();
  const date = Moment(date1).format("DD-MM-YYYY");

  const dispatch = useDispatch();

  const states = useSelector((state) => state.states.states);
  const districts = useSelector((state) => state.districts.districts);
  const centerDetails = useSelector(
    (state) => state.findByDistrict.centerDetails
  );

  const useStyles = makeStyles({
    button: {
      margin: "3px 0 0 10px",
      fontWeight: 700,
      textTransform: "capitalize",
      borderRadius: "5px",
      background: "transparent",
      border: "1px solid #002060",
    },
  });
  const classes = useStyles();

  const handleState = (event) => {
    setState(event.target.value);
    const selectedState = states.filter(
      (item) => item.state_name === event.target.value
    );
    dispatch(selectedStates(selectedState[0].state_id));
  };

  const handleDistrict = (event) => {
    setDistrict(event.target.value);
    const selectedDistricts = districts.filter(
      (item) => item.district_name === event.target.value
    );
    dispatch(selectedDistrict(selectedDistricts[0].district_id, date));
  };

  const submitHandler = (event) => {
    dispatch(fetchCenterData());
    event.preventDefault();
    setIsSubmit(true);
  };

  return (
    <Grid container justify="center" direction="column">
      <Grid item className="searchForm">
        <form onSubmit={submitHandler}>
          <Select
            labelId="demo-simple-select-label"
            label="select state"
            id="demo-simple-select"
            name="state"
            value={state}
            onChange={(e) => handleState(e)}
            onClick={() => dispatch(fetchDistrictsData())}
            className="select"
          >
            <MenuItem value="Select State" disabled>
              Select State
            </MenuItem>
            {states.map(({ state_id, state_name }) => (
              <MenuItem value={state_name} key={state_id}>
                {state_name}
              </MenuItem>
            ))}
          </Select>

          <Select
            name="district"
            value={district}
            onChange={(e) => handleDistrict(e)}
            label="select district"
            className="select"
            style={{ marginLeft: "20px" }}
          >
            <MenuItem value="Select District" disabled>
              Select District
            </MenuItem>
            {districts.map(({ district_id, district_name }) => (
              <MenuItem value={district_name} key={district_id}>
                {district_name}
              </MenuItem>
            ))}
          </Select>
          <Button
            type="submit"
            variant="outlined"
            size="small"
            className={classes.button}
          >
            Search
          </Button>
        </form>
      </Grid>
      {isSubmit ? (
        <Grid>
          <FilterButtons centerDetails={centerDetails} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default SearchByDistrict;
