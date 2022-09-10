import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DashBoard from "./Components/Dashboard";
import AboutUs from "./Components/AboutUs";
import Service from "./Components/Service";
import SignUp from "./Components/SignUp";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <DashBoard />
      <AboutUs />
      <Service />
      <SignUp />
      <Newsletter />
      <Footer />
    </Box>
  );
}

export default App;
