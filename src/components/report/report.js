import React from "react";
import "./report.css";
import useStyles from "./styles";
import { Grid, Box, Typography, Link } from "@material-ui/core";
const Report = () => {
  const report = [
    {
      number: "  +1315232",
      total: " 2285.86+Lakh",
      title: "Tot Vaccination Doses",
    },
    {
      number: "+1261569",
      total: "1837.89 + Lakh",
      title: "Dose-1 Vaccinations",
    },
    {
      number: "+51960",
      total: "448.05 + Lakh",
      title: "Dose-2 Vaccinations",
    },
    {
      number: "+271536",
      total: "989.35 + Lakh",
      title: "Tot Vaccinated - Male",
    },
    {
      number: "+211421",
      total: "849.09 + Lakh",
      title: "Tot Vaccinated - Female",
    },
    {
      number: "+4",
      total: "21706",
      title: "AEFI Reporteds",
    },
  ];

  const classes = useStyles();
  return (
    <Grid container className="container" justify="center">
      {report.map(({ number, total, title }) => (
        <Grid item key={title} className={classes.grid}>
          <Typography variant="body2" className={classes.number}>
            {number}
          </Typography>
          <Typography variant="h6" className={classes.total}>
            {total}
          </Typography>
          <Typography variant="body2" className={classes.title}>
            {title}
          </Typography>
        </Grid>
      ))}
      <Grid item>
        <Box component="span">
          <Link
            href="https://dashboard.cowin.gov.in/"
            style={{ color: "#001f60", textDecoration: "none" }}
            className="viewReport"
          >
            View Full Report
          </Link>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Report;
