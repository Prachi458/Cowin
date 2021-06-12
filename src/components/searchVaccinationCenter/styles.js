import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  heading: {
    margin: "auto",
    marginTop: "20px",
    fontWeight: "bold",
  },
  searchBtn: {
    whiteSpace: "nowrap",
    borderRadius: " 41px",
    color: "#414141",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  btn: {
    height: "48px",
    padding: "0 24px",
    cursor: "pointer",
    boxSizing: "border-box",
    opacity: "0.6",
    minWidth: "160px",
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    whiteSpace: "nowrap",
    position: "relative",
  },
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
  arrow_background: {
    height: "45px",
    width: "3%",
    opacity: "1",
    background: "#7e7c7c",
    cursor: "pointer",
    marginTop: "10px",
  },
  date: {
    border: "1px solid #eaeaea",
    background: "rgba(0,0,0,.04)",
    borderBottom: "1px solid #eaeaea",
    fontWeight: "600",
    padding: "10px 7px",
    marginLeft: "10px",
  },
  arrow: {
    color: "white",
    marginTop: "8px",
  },
  no_center: {
    textAlign: "center",
    marginTop: "10px",
  },
  note: {
    width: "700px",
    marginTop: "30px",
    marginLeft: "50px",
  },
  filterButtons: {
    marginTop: "40px",
    marginLeft: "20px",
    borderRadius: "5px",
  },
});
export default useStyles;
