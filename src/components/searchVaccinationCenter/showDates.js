import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import Moment from "moment";
import useStyles from "./styles";
import { Grid, Typography, Button, Box } from "@material-ui/core";

const ShowDates = () => {
  const today = Moment();
  const dates = [
    Moment(today).format("DD MMM YYYY"),
    Moment(today.add(1, "days")).format("DD MMM YYYY"),
    Moment(today.add(1, "days")).format("DD MMM YYYY"),
    Moment(today.add(1, "days")).format("DD MMM YYYY"),
    Moment(today.add(1, "days")).format("DD MMM YYYY"),
    Moment(today.add(1, "days")).format("DD MMM YYYY"),
    Moment(today.add(1, "days")).format("DD MMM YYYY"),
  ];

  const classes = useStyles();
  const centerDetailsByPin = useSelector(
    (state) => state.findByPin.centerDetails
  );
  const centerDetailsByDistrict = useSelector(
    (state) => state.findByDistrict.centerDetails
  );
  return (
    <Grid container justify="center">
      <Grid item className={classes.arrow_background}>
        <Typography>
          <ArrowLeft fontSize="large" className={classes.arrow} />
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: "10px" }}>
        {dates.map((date) => (
          <Button key={date} variant="outlined" className={classes.date}>
            {date}
          </Button>
        ))}
        <Grid item className={classes.no_center}>
          {!centerDetailsByPin.length && !centerDetailsByDistrict.length ? (
            <Box fontWeight="bold">
              No Vaccination center is available for booking.
            </Box>
          ) : null}
        </Grid>
      </Grid>
      <Grid item className={classes.arrow_background}>
        <Typography>
          <ArrowRight fontSize="large" className={classes.arrow} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ShowDates;
