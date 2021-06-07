import React, { useState } from "react";
import "./searchByPin.css";
import { TextField, Button, Grid, makeStyles } from "@material-ui/core";

const SearchByPin = () => {
  const useStyles = makeStyles({
    textField: {
      width: "30rem",
      borderRadius: "10px",
    },
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
  const [pin, setPin] = useState("");

  return (
    <Grid>
      <form className="searchForm" autoComplete="off">
        <TextField
          error={pin === ""}
          helperText={pin === "" ? "Please enter pincode" : " "}
          type="number"
          id="outlined-basic"
          label="Enter your PIN"
          variant="outlined"
          size="small"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          inputProps={{ maxLength: "6" }}
          className={classes.textField}
        />

        <Button variant="outlined" size="small" className={classes.button}>
          Search
        </Button>
      </form>
    </Grid>
  );
};

export default SearchByPin;
