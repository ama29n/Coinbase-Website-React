import { Box, Typography, Button } from "@mui/material";

function Newsletter() {
  return (
    <Box sx={__body}>
      <Box flex="1 1 50%" display="flex" flexDirection="column">
        <Typography
          sx={{
            fontWeight: "500",
            fontSize: "1.5rem",
            color: "rgb(200, 197, 197)",
          }}
        >
          Newsletter
        </Typography>
        <Typography sx={__body_title}>
          Get now free 20% discount for all products on your first order
        </Typography>
      </Box>

      <Box sx={{
        flex: "1 1 50%",
        display: "flex",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media(max-width: 820px)": {
            flexDirection: "column",
            alignItems: "flex-start"
        }

      }}>
        <input style={__input} placeholder="Enter your email address..." />
        <Button variant="contained">Subscribe</Button>
      </Box>
    </Box>
  );
}

export default Newsletter;

const __body = {
  width: "100%",
  display: "flex",
  gap: "4rem",
  backgroundColor: "#02071b",
  padding: "7rem 5rem",
  alignItems: "center",
  marginBottom: "1rem",
};

const __input = {
  backgroundColor: "#091030",
  outline: "none",
  border: "none",
  padding: "1rem 2rem",
  color: "White",
  fontSize: "1.2rem",
};

const __body_title = { 
    fontWeight: "500",
    fontSize: "2rem",
    "@media(max-width: 820px)": {
        fontSize: "1.5rem"
    }
};
