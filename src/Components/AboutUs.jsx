import { Box, Typography, Button } from "@mui/material";
import AboutImage from "../Assets/about.png";

import SendIcon from "@mui/icons-material/Send";

function AboutUs() {
  return (
    <Box sx={__body}>
      <Box sx={__body_heading}>
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1.5rem",
            color: "rgb(200, 197, 197)",
          }}
        >
          About Us
        </Typography>
        <Typography
          sx={{ fontWeight: "500", fontSize: "2rem", textAlign: "center" }}
        >
          Why would You Choose Market Watchmen?
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          gap: "2rem",
          "@media(max-width: 412px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box sx={__bodyContent}>
          <Typography sx={{ color: "rgb(200, 197, 197)", fontSize: "1.5rem" }}>
            Easy to learn platform -
          </Typography>
          <Typography sx={{
            "@media(max-width: 412px)": {
              textAlign: "center",
            },
          }}>
            We won’t ask you to link to your bank accounts, we just want
            everyone to have the opportunity to understand the potential of
            saving and investing for retirement or short term goals. We simply
            do data analytics and simplify the way you look at investment assets
          </Typography>
          <Box>
            <Button variant="contained" endIcon={<SendIcon />}>
              Start Earning
            </Button>
          </Box>
        </Box>

        <Box sx={{ flex: "1 1 60%" }}>
          <img
            alt="home"
            src={AboutImage}
            style={{ width: "90%", height: "auto" }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default AboutUs;

// Styles

const __body = {
  width: "90%",
  margin: "1rem auto",
};

const __body_heading = {
  width: "fit-content",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const __bodyContent = {
  flex: "1 1 40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "2rem",
  "@media(max-width: 412px)": {
    alignItems: "center",
  },
};
