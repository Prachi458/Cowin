import React from "react";
import useStyles from "./styles";
import { Grid, Box, Link } from "@material-ui/core";

const HelpLine = () => {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center">
      <Grid item>
        <img src="images/call.jpg" alt="call" className={classes.callImg} />
      </Grid>
      <Grid item className={classes.help}>
        <Box fontWeight="fontWeightBold">Number</Box>
        <Link href="tel:911123978046" className={classes.helpNumber}>
          91-11-23978046
        </Link>
      </Grid>

      <Grid item>
        <img
          src="images/health_ministry.jpg"
          alt="health"
          className={classes.callImg}
        />
      </Grid>
      <Grid item className={classes.help}>
        <Box fontWeight="fontWeightBold">Health Ministry</Box>
        <Link href="tel:1075" className={classes.helpNumber}>
          1075
        </Link>
      </Grid>

      <Grid item>
        <img src="images/child.jpg" alt="health" className={classes.childImg} />
      </Grid>
      <Grid item className={classes.help}>
        <Box fontWeight="fontWeightBold">Child</Box>
        <Link href="tel:1098" className={classes.helpNumber}>
          1098
        </Link>
      </Grid>

      <Grid item>
        <img
          src="images/mental_health.PNG"
          alt="health"
          className={classes.callImg}
        />
      </Grid>
      <Grid item className={classes.help}>
        <Box fontWeight="fontWeightBold">Mental Health</Box>
        <Link href="tel:08046110007" className={classes.helpNumber}>
          08046110007
        </Link>
      </Grid>

      <Grid item>
        <img
          src="images/senior_citizen.jpg"
          alt="health"
          className={classes.citizenImg}
        />
      </Grid>
      <Grid item className={classes.help}>
        <Box fontWeight="fontWeightBold">Senior Citizens</Box>
        <Link href="tel:14567" className={classes.helpNumber}>
          14567
        </Link>
      </Grid>
    </Grid>
  );
};

export default HelpLine;
