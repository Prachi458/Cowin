import { Grid, Link } from "@material-ui/core";
const ProcedureLinks = ({ classes }) => {
  return (
    <Grid className={classes.procedureLinks}>
      <Link
        href="https://prod-cdn.preprod.co-vin.in/assets/pdf/User_Guide_Citizen%20registration_18+.pdf"
        className={classes.linkBox}
      >
        Know how to book your appointment
      </Link>
      <Link
        href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf"
        className={classes.linkBox}
        style={{ marginLeft: "10px" }}
      >
        Dos and Don'ts
      </Link>
    </Grid>
  );
};
export default ProcedureLinks;
