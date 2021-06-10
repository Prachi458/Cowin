import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box,
} from "@material-ui/core";

import useStyles from "./styles";

const VaccinationData = ({ centerDetails }) => {
  const classes = useStyles();

  return (
    <Grid>
      <Table>
        <TableBody>
          {centerDetails.map(
            ({
              address,
              district_name,
              state_name,
              pincode,
              name,
              available_capacity,
              available_capacity_dose1,
              available_capacity_dose2,
              vaccine,
              min_age_limit,
              fee_type,
              session_id,
            }) => (
              <Grid item style={{ marginTop: "20px" }} key={session_id}>
                <TableRow>
                  <TableCell className={classes.center_data}>
                    <Typography variant="body2" className={classes.center_name}>
                      {name}
                    </Typography>
                    <Typography variant="body2" className={classes.address}>
                      {address},{district_name}
                    </Typography>
                    <Typography variant="body2" className={classes.state_name}>
                      {state_name},{pincode}
                    </Typography>
                    {fee_type === "paid" ? (
                      <Typography variant="body2" className={classes.fee_type}>
                        {fee_type}
                      </Typography>
                    ) : null}
                  </TableCell>
                  <TableCell>
                    {available_capacity === 0 ? (
                      <Box style={{ marginLeft: "30px" }}>
                        <Typography variant="body2" className={classes.booked}>
                          Booked
                        </Typography>
                      </Box>
                    ) : (
                      <Box className={classes.doses}>
                        <Typography>D1 {available_capacity} D2</Typography>
                        <Typography>
                          {available_capacity_dose1} &nbsp; &nbsp; &nbsp; &nbsp;
                          {available_capacity_dose2}
                        </Typography>
                      </Box>
                    )}
                    <Typography variant="body2" className={classes.vaccine}>
                      {vaccine}
                    </Typography>
                    <Typography variant="body2" className={classes.age}>
                      Age{min_age_limit}+
                    </Typography>
                  </TableCell>
                  <TableCell
                    className={classes.not_available}
                    style={{ textAlign: "center" }}
                  >
                    <Typography variant="body2"> NA</Typography>
                  </TableCell>
                  <TableCell className={classes.not_available}>
                    <Typography variant="body2"> NA</Typography>
                  </TableCell>
                  <TableCell className={classes.not_available}>
                    <Typography variant="body2"> NA</Typography>
                  </TableCell>
                  <TableCell className={classes.not_available}>
                    <Typography variant="body2"> NA</Typography>
                  </TableCell>
                  <TableCell className={classes.not_available}>
                    <Typography variant="body2"> NA</Typography>
                  </TableCell>
                  <TableCell className={classes.not_available}>
                    <Typography variant="body2">NA</Typography>
                  </TableCell>
                </TableRow>
              </Grid>
            )
          )}
        </TableBody>
      </Table>
    </Grid>
  );
};

export default VaccinationData;
