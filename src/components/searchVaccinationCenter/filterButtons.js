import React from "react";
import { Grid, Button, Typography, Box } from "@material-ui/core";

import useStyles from "./styles";

const FilterButtons = () => {
  const buttons = [
    "Age 18+",
    "Age 45+",
    "Covishield",
    "Covaxin",
    "Sputnik V",
    "Free",
    "Paid",
  ];
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" direction="column">
      <Grid item>
        {buttons.map((button) => (
          <Button
            key={button}
            size="small"
            variant="outlined"
            className={classes.filterButtons}
            onClick={(e) =>
              (e.target.style.background = "#002060") &&
              (e.target.style.color = "#fff")
            }
          >
            {button}
          </Button>
        ))}
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
    </Grid>
  );
};

export default FilterButtons;
