import React from "react";
import { makeStyles } from "@material-ui/core";

const HelpLine = () => {
  const useStyles = makeStyles({
    heading: {
      margin: "auto",
      fontSize: "1.5rem",
      fontWeight: 500,
    },
  });

  const classes = useStyles();

  return (
    <Grid item className={classes.heading}>
      <Typography variant="h6">Helpline</Typography>
    </Grid>
  );
};

export default HelpLine;
