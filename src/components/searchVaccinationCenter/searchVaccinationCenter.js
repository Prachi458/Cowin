import React, { useState } from "react";
import { Grid, Typography, makeStyles, Box, Button } from "@material-ui/core";
import "./searchVaccinationCenter.css";
import SearchByPin from "./searchByPin";

const SearchVaccinationCenter = () => {
  const useStyles = makeStyles({
    heading: {
      margin: "auto",
      marginTop: "20px",
      fontWeight: "bold",
    },
    searchBtn: {
      whiteSpace: "nowrap",
      borderRadius: " 41px",
      color: "#414141",
      fontWeight: "bold",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: "#002060",
        color: "white",
      },
    },
    btn: {
      height: "48px",
      padding: "0 24px",
      cursor: "pointer",
      boxSizing: "border-box",
      opacity: "0.6",
      minWidth: "160px",
      textAlign: "center",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      whiteSpace: "nowrap",
      position: "relative",
    },
  });
  const classes = useStyles();
  const [searchByPin, setSearchByPin] = useState(false);

  return (
    <Grid container direction="column">
      <Grid item className={classes.heading}>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold">
            Check your nearest vaccination center and slots availability
          </Box>
        </Typography>
      </Grid>
      <Grid
        item
        style={{
          margin: "auto",
          border: "1px solid #414141",
          borderRadius: "51px",
          width: "383px",
          marginTop: "20px",
        }}
        className="classes.btn"
      >
        <Button className={classes.searchBtn}>Search by Map</Button>
        <Button
          className={classes.searchBtn}
          onClick={() => setSearchByPin(true)}
        >
          Search by Pin
        </Button>
        <Button className={classes.searchBtn}>Search by District</Button>
      </Grid>
      {searchByPin ? <SearchByPin /> : null}
    </Grid>
  );
};

export default SearchVaccinationCenter;
