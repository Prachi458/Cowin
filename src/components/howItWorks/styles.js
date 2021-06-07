import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  background: {
    background: "#fdbc00 ",
    padding: "10px 0",
    color: "#000",
    width: "100%",
    marginTop: "30px",
    backgroundAttachment: "scroll",
  },
  heading: {
    color: "#374957",
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    margin: "30px 0px",
  },
  logo: {
    height: "140px",
    width: "140px",
  },
  headings: {
    color: "#000!important",
    textTransform: "uppercase",
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "20px",
  },
  typographyPara: {
    width: " 200px",
    textAlign: "center",
    padding: "5px 35px",
    fontSize: "16px",
    fontWeight: 400,
  },
  linkBox: {
    fontSize: "18px",
    color: "#002060",
    fontWeight: "700",
    borderRadius: "5px",
    padding: "10px 12px",
    border: "2px solid #fff",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "white",
      textDecoration: "none",
    },
  },
  procedureLinks: {
    textAlign: "center",
    marginTop: "20px",
    marginBottom: "20px",
  },
  registrationProcedure: {
    marginLeft: "40px",
    textAlign: "center",
  },
});
export default useStyles;
