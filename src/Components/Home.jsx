import { Box, Button } from "@mui/material";
import HomeImage from "../Assets/home.png";

function Home() {
  return (
    <Box sx={__body}>
        <Box sx={__bodyContent}>
            <Box sx={{ color: "#2499f9", fontWeight: "600" }}>Investment Made Easy</Box>
            <Box sx={{ fontSize: "4.3rem", fontWeight: "500" }}>The Easiest Way to Track Multiple Currencies</Box>
            <Box sx={{ color: "rgb(200, 197, 197)" }}>Market Watchman allows you to monitor your balances, trade without limits and earn for specific coins.</Box>
            <Box sx={{ display: "flex", gap: "1rem" }}>
                <Button variant="contained">Try Now</Button>
                <Button variant="text">How is works?</Button>
            </Box>
        </Box>

        <Box sx={{ flex: "1 1 50%" }}>
            <img alt="home" src={HomeImage} style={{ width: "90%", height: "auto" }} />
        </Box>
    </Box>
  );
}

export default Home;

// Styles

const __body = { 
    width: "90%",
    margin: "1rem auto",
    display: "flex",
    gap: "2rem"
};

const __bodyContent = {
    flex: "1 1 50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: "2rem"
};