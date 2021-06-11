import React, { useState } from "react";
import useStyles from "./styles";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import "./searchVaccinationCenter.css";
import SearchByPin from "./searchByPin";
import { useDispatch } from "react-redux";
import { fetchStatesData } from "../../redux/thunk/loadStates";
import SearchByDistrict from "./searchByDistrict";

const SearchVaccinationCenter = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [searchByPin, setSearchByPin] = useState(false);
  const [searchByDistrict, setSearchByDistrict] = useState(false);

  const onSearchByState = () => {
    setSearchByPin(true);
    setSearchByDistrict(false);
  };

  const onSearchByDistrict = () => {
    dispatch(fetchStatesData());
    setSearchByPin(false);
    setSearchByDistrict(true);
  };

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
          marginTop: "20px",
        }}
        className="classes.btn"
      >
        <Button className={classes.searchBtn}>Search by Map</Button>
        <Button className={classes.searchBtn} onClick={onSearchByState}>
          Search by Pin
        </Button>
        <Button className={classes.searchBtn} onClick={onSearchByDistrict}>
          Search by District
        </Button>
      </Grid>
      {searchByPin ? <SearchByPin /> : null}
      {searchByDistrict ? <SearchByDistrict /> : null}
    </Grid>
  );
};

export default SearchVaccinationCenter;
