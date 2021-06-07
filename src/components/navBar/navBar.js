import React from "react";
import "./navBar.css";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Grid,
  Box,
  Typography,
  makeStyles,
  Link,
} from "@material-ui/core";
import {
  VerifiedUserOutlined,
  LocalHospitalOutlined,
  LockOutlined,
  DashboardOutlined,
  LiveHelpOutlined,
} from "@material-ui/icons";

const NavBar = () => {
  const useStyles = makeStyles({
    heading: {
      margin: "auto",
      fontSize: "1.5rem",
      fontWeight: 500,
      marginTop: "10px",
    },
  });

  const classes = useStyles();

  const navLinks = [
    {
      title: `Ministry of Health and Family Welfare`,
      path: "https://www.india.gov.in/",
    },
    {
      icon: <LiveHelpOutlined fontSize="small" />,
      title: "FAQ",
      path: "https://www.cowin.gov.in/faq",
    },
    {
      icon: <DashboardOutlined fontSize="small" />,
      title: "Dashboard",
      path: "https://dashboard.cowin.gov.in/",
    },
    {
      icon: <DashboardOutlined fontSize="small" />,
      title: "Open APIs",
      path: "https://apisetu.gov.in/public/marketplace/api/cowin",
    },
    {
      icon: <LockOutlined fontSize="small" />,
      title: "Department Login",
      path: "https://admin.cowin.gov.in/login",
    },
    {
      icon: <LocalHospitalOutlined fontSize="small" />,
      title: "Vaccinator",
      path: "https://app.cowin.gov.in/login",
    },
    {
      icon: <VerifiedUserOutlined fontSize="small" />,
      title: "Verify Certificate",
      path: "https://verify.cowin.gov.in/",
    },
  ];

  return (
    <Grid container>
      <AppBar position="static">
        <Toolbar className="nav">
          <Grid item>
            <List component="nav" className="navBar">
              <img src="./images/logo1.png" className="logo1" alt="logo" />
              {navLinks.map(({ icon, title, path }) => (
                <Link href={path} key={title} color="inherit">
                  <ListItem button>
                    <ListItemText primary={icon} style={{ marginTop: "8px" }} />
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid item className="register">
        <Grid item>
          <img
            src="./images/covid19logo.jpg"
            className="logo2"
            alt="covid19logo"
          />
        </Grid>
        <Grid item>
          <Box component="span" display="block" className="registerSignupBtn">
            <Link
              href="https://selfregistration.cowin.gov.in/"
              style={{ color: "#001f60", textDecoration: "none" }}
              className="registerBtn"
            >
              Register/ Sign In yourself
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Grid item className={classes.heading}>
        <Typography variant="h6">
          <Box fontWeight="fontWeightBold">Helpline</Box>
        </Typography>
      </Grid>
    </Grid>
  );
};
export default NavBar;
