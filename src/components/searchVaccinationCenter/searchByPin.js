import React, { useState } from "react";
import "./searchByPin.css";
import FilterButtons from "./filterButtons";
import useStyles from "./styles";
import { TextField, Button, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchCenterData } from "../../redux/thunk/findByPin";
import { enteredPin } from "../../redux/actions";
import Moment from "moment";

const SearchByPin = () => {
  const [pin, setPin] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const date1 = new Date();

  const date = Moment(date1).format("DD-MM-YYYY");
  const centerDetails = useSelector((state) => state.findByPin.centerDetails);

  const dispatch = useDispatch();
  const classes = useStyles();

  const submitHandler = (event) => {
    dispatch(enteredPin(pin, date));
    dispatch(fetchCenterData());
    event.preventDefault();
    setIsSubmit(true);
  };

  return (
    <Grid container justify="center" direction="column">
      <Grid item>
        <form
          className="searchForm"
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <TextField
            error={pin === ""}
            helperText={pin === "" ? "Please enter six-digit pincode" : " "}
            type="number"
            id="outlined-basic"
            label="Enter your PIN"
            variant="outlined"
            size="small"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            InputProps={{ maxLength: 6 }}
            className={classes.textField}
            required
          />

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

export default SearchByPin;
