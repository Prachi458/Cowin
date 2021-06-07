import { Grid, Typography } from "@material-ui/core";
import React from "react";
import ProcedureLinks from "./procedureLinks";
import RegistrationProcedure from "./registrationProcedure";
import useStyles from "./styles";

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.background}>
      <Typography variant="h5" align="center" className={classes.heading}>
        How it Works
      </Typography>

      <RegistrationProcedure classes={classes} />
      <ProcedureLinks classes={classes} />
    </Grid>
  );
};

export default HowItWorks;
