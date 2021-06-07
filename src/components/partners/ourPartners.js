import { Typography, Grid, Link } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const OurPartners = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Typography variant="h5" className={classes.heading}>
        Our Partners
      </Typography>

      <Grid item>
        <Link href="https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu">
          <img src="images/aarogya_logo.png" alt="logo" />
        </Link>
        <Link href="https://play.google.com/store/apps/details?id=com.digilocker.android">
          <img
            src="images/digilocker_logo.png"
            alt="logo"
            className={classes.image}
          />
        </Link>
        <Link href="https://web.umang.gov.in/web_new/login?redirect_to=department%3Furl%3Dcowin%2F%26dept_id%3D355%26dept_name%3DCo-WIN">
          <img
            src="images/umang_logo.png"
            alt="logo"
            className={classes.umang_logo}
          />
        </Link>
        <Link href="https://digitalseva.csc.gov.in/">
          <img
            src="images/csclogo.jpeg"
            alt="logo"
            style={{ width: "150px" }}
            className={classes.csc_logo}
          />
        </Link>
        <Link href="https://www.cowin.gov.in/">
          <img
            src="images/undp_logo.png"
            alt="logo"
            style={{ width: "40px" }}
            className={classes.undp_logo}
          />
        </Link>
      </Grid>
    </Grid>
  );
};

export default OurPartners;
