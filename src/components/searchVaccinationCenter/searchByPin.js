import React, { useState } from "react";
import "./searchByPin.css";
import FilterButtons from "./filterButtons";
import useStyles from "./styles";
import { TextField, Button, Grid } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
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

  const handlePin = (e) => {
    if (e.target.value.match(/^[A-Za-z]+$/)) {
      return (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      );
    } else {
      setPin(e.target.value);
    }
  };

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
            required
            error={pin === ""}
            helperText={pin === "" ? "Please enter  pincode" : ""}
            InputProps={{ inputProps: { maxLength: 6 } }}
            id="outlined-basic"
            label="Enter your PIN"
            variant="outlined"
            size="small"
            value={pin}
            onChange={(e) => handlePin(e)}
            className={classes.textField}
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
