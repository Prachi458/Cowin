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
} from "@material-ui/core";
import {
  VerifiedUserOutlined,
  LocalHospitalOutlined,
  LockOutlined,
  DashboardOutlined,
  LiveHelpOutlined,
} from "@material-ui/icons";

const NavBar = () => {
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
            <List
              component="nav"
              aria-labelledby="main navigation"
              className="navBar"
            >
              <img src="./images/logo1.png" className="logo1" alt="logo" />
              {navLinks.map(({ icon, title, path }) => (
                <a href={path} key={title} className="linkText">
                  <ListItem button>
                    <ListItemText primary={icon} style={{ marginTop: "8px" }} />
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
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
            <a
              href="https://selfregistration.cowin.gov.in/"
              className="registerBtn"
            >
              Register/ Sign In Yourself
            </a>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default NavBar;
