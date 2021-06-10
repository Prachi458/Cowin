import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  center_name: {
    textTransform: "uppercase",
  },
  center_data: { width: "250px" },
  address: { color: "#998fa2", width: "300px" },
  state_name: { color: "#998fa2" },
  fee_type: {
    color: "#fff",
    fontSize: "9px",
    fontWeight: "600",
    backgroundColor: "#2152b3",
    borderRadius: "20px",
    padding: "2px 5px",
    marginLeft: "3px",
    width: "20px",
  },
  booked: {
    color: "white",
    background: "#ad0000",
    fontWeight: "bold",
    padding: "2px",
    width: "80px",
    fontSize: "12px",
    textAlign: "center",
  },
  doses: {
    background: "#c5e0b4",
    marginLeft: "30px",
  },
  vaccine: {
    fontSize: "12px",
    marginLeft: "30px",
  },
  age: { color: "#c20505", fontSize: "12px", textAlign: "center" },
  not_available: {
    width: "90px",
  },
});
export default useStyles;
