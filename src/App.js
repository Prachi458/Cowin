import "./App.css";
import { Grid } from "@material-ui/core";
import NavBar from "./components/navBar/navBar";
import HelpLine from "./components/helpLine/helpLine";
import VaccineBanner from "./components/vaccineBanner/vaccineBanner";
import SearchVaccinationCenter from "./components/searchVaccinationCenter/searchVaccinationCenter";
import HowItWorks from "./components/howItWorks/howItWorks";
import Report from "./components/report/report";
import OurPartners from "./components/partners/ourPartners";
function App() {
  return (
    <Grid>
      <NavBar />
      <HelpLine />
      <VaccineBanner />
      <SearchVaccinationCenter />
      <HowItWorks />
      <Report />
      <OurPartners />
    </Grid>
  );
}

export default App;
