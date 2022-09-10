import { Box } from "@mui/material";
import Background from "../Assets/signupBackground.png";
import Card from "../Assets/card.png";

function SignUp() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          fontSize: "3rem",
          fontWeight: "500",
          padding: "2rem",
          "@media(max-width: 820px)": {
            fontSize: "1.5rem"
          },
          "@media(max-width: 412px)": {
            fontSize: "1rem"
          },
        }}
      >
        Sign up without any bank account linking any card
      </Box>

      <Box>
        <img
          alt="card"
          src={Card}
          style={{ width: "100%", height: "auto", marginBottom: "-4px" }}
        />
      </Box>
    </Box>
  );
}

export default SignUp;
