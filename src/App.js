import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DashBoard from "./Components/Dashboard";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <DashBoard />
      <AboutUs />
    </Box>
  );
}

export default App;
