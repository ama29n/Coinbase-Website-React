import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DashBoard from "./Components/Dashboard";
import AboutUs from "./Components/AboutUs";
import Service from "./Components/Service";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <DashBoard />
      <AboutUs />
      <Service />
    </Box>
  );
}

export default App;
