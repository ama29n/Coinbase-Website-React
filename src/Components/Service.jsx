import { Box, Typography } from "@mui/material";
import service1 from "../Assets/service1.png";
import service2 from "../Assets/service2.png";
import service3 from "../Assets/service3.png";

function Service() {
  return (
    <Box sx={__body}>
        <Box sx={__body_heading}>
            <Typography sx={{ fontWeight: "500", fontSize: "1.5rem", color: "rgb(200, 197, 197)" }}>Start your trading with us</Typography>
            <Typography sx={{ fontWeight: "500", fontSize: "2rem", textAlign: "center" }}>Market Watchmen has a variety of features that make it the best place to start trading</Typography>
        </Box>

        <Box sx={{
            display: "flex",
            gap: "2rem",
            width: "80%",
            margin: "6rem auto 0",
            "@media(max-width: 412px)": {
                flexDirection: "column",
                gap: "5rem"
            },
        }}>
            <Box display="flex" flexDirection="column" gap="1.5rem" alignItems="center">
                <Box><img alt="service" src={service1} /></Box>
                <Typography fontSize="1.5rem" textAlign="center">Manage your portfolio</Typography>
                <Typography textAlign="center" color="rgb(200, 197, 197)">Coinbase supports a variety of the most popular digital currencies.</Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap="1.5rem" alignItems="center">
                <Box><img alt="service" src={service2} /></Box>
                <Typography fontSize="1.5rem" textAlign="center">Recurring buys</Typography>
                <Typography textAlign="center" color="rgb(200, 197, 197)">Coinbase supports a variety of the most popular digital currencies.</Typography>
            </Box>

            <Box display="flex" flexDirection="column" gap="1.5rem" alignItems="center">
                <Box><img alt="service" src={service3} /></Box>
                <Typography fontSize="1.5rem" textAlign="center">Mobile apps</Typography>
                <Typography textAlign="center" color="rgb(200, 197, 197)">Coinbase supports a variety of the most popular digital currencies.</Typography>
            </Box>
        </Box>
    </Box>
  );
}

export default Service;

// Styles

const __body = { 
    width: "90%",
    margin: "8rem auto",
};

const __body_heading = {
    width: "fit-content",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };