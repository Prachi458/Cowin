import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";

const RegistrationProcedure = ({ classes }) => {
  const registrationProcedure = [
    {
      image: "images/registerYourself.svg",
      title: " Register Yourself",
      description:
        "Register using your Mobile no. or Aadhaar no. or any other Identity docs..",
      link: "",
      linkText: "",
    },
    {
      image: "images/chooseLocation.svg",
      title: "Choose Vaccine Location",
      description: "Select your nearby Vaccine Center for vaccination",
      link: "",
      linkText: "",
    },
    {
      image: "images/confirmSlot.svg",
      title: "Confirm Your Slot",
      description: "Book your slot to Get Vaccine",
      link: "",
      linkText: "",
    },
    {
      image: "images/anyQuestion.png",
      title: " Any Question?",
      description: "Please follow our Frequently asked questions",
      link: "https://www.cowin.gov.in/faq",
      linkText: "(FAQ)",
    },
  ];
  return (
    <Grid container justify="center">
      {registrationProcedure.map(
        ({ image, title, description, link, linkText }) => (
          <Grid item key={title} className={classes.registrationProcedure}>
            <img src={image} alt="register" className={classes.logo} />
            <Typography variant="h5" className={classes.headings}>
              {title}
            </Typography>
            <Typography variant="subtitle1" className={classes.typographyPara}>
              {description}
              <Link href={link}>{linkText}</Link>
            </Typography>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default RegistrationProcedure;
