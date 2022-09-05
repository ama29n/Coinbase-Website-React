import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DashBoard from "./Components/Dashboard";

function App() {
  return (
    <Box>
      <Navbar />
      <Home />
      <DashBoard />
    </Box>
  );
}

export default App;
