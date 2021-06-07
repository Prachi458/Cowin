import React from "react";
import { Grid } from "@material-ui/core";
import "./vaccineBanner.css";

const VaccineBanner = () => {
  return (
    <Grid container>
      <img
        src="images/largest-vaccine-banner.jpg"
        alt="vaccine banner"
        className="vaccineBanner"
      />
    </Grid>
  );
};

export default VaccineBanner;
