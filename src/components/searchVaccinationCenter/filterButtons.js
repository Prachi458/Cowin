import React, { useState } from "react";
import {
  Grid,
  Typography,
  Box,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@material-ui/core";

import useStyles from "./styles";
import VaccinationData from "../showVaccinationData/vaccinationData";
import ShowDates from "./showDates";

const FilterButtons = ({ centerDetails }) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [center_data, setCenter_data] = useState(centerDetails);

  const handleAge18 = (value) => {
    setChecked(true);
    const filter = centerDetails.filter((item) => item.min_age_limit === value);
    setCenter_data(filter);
  };

  const handleAge45 = (value) => {
    setChecked(true);
    const filter = centerDetails.filter((item) => item.min_age_limit === value);
    setCenter_data(filter);
  };

  const handleCovishield = (value) => {
    setChecked(true);
    const filter = centerDetails.filter((item) => item.vaccine === value);
    setCenter_data(filter);
  };

  const handleCovaxin = (value) => {
    setChecked(true);
    const filter = centerDetails.filter((item) => item.vaccine === value);
    setCenter_data(filter);
  };

  const handleFree = (value) => {
    setChecked(true);
    const filter = centerDetails.filter((item) => item.fee_type === value);
    setCenter_data(filter);
  };

  const handlePaid = (value) => {
    setChecked(true);
    const filter = centerDetails.filter((item) => item.vaccine === value);
    setCenter_data(filter);
  };

  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        <FormGroup row>
          <FormControlLabel
            control={
              <Checkbox name="checkedA" onClick={() => handleAge18(18)} />
            }
            label="Age 18+"
          />
          <FormControlLabel
            control={
              <Checkbox name="checkedA" onClick={() => handleAge45(45)} />
            }
            label="Age 45+"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedA"
                onClick={() => handleCovishield("COVISHIELD")}
              />
            }
            label="Covishield"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedA"
                onClick={() => handleCovaxin("COVAXIN")}
              />
            }
            label="Covaxin"
          />

          <FormControlLabel
            control={
              <Checkbox name="checkedA" onClick={() => handleFree("Free")} />
            }
            label="Free"
          />
          <FormControlLabel
            control={
              <Checkbox name="checkedA" onClick={() => handlePaid("Paid")} />
            }
            label="Paid"
          />
        </FormGroup>
      </Grid>
      <Grid item className={classes.note}>
        <Typography variant="caption">
          <Box fontWeight="bold">NOTE :</Box> The slots availability data
          displayed in the pincode or district search is provided by the state
          govt and private hospitals. The total availability slots includes
          Dose-1 and Dose-2 slots. While we have real-time data, slot
          availability on CoWin changes rapidly. D1: Dose 1, D2: Dose 2
        </Typography>
      </Grid>

      <ShowDates />
      <Grid container>
        {checked ? (
          <VaccinationData centerDetails={center_data} />
        ) : (
          <VaccinationData centerDetails={centerDetails} />
        )}
      </Grid>
    </Grid>
  );
};

export default FilterButtons;
