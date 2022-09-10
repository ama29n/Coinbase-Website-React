import { Box } from "@mui/material";
import Background from "../Assets/signupBackground.png";
import Card from "../Assets/card.png";

function SignUp() {
  return (
    <Box sx={{
        backgroundImage: `url(${Background})`,
        height: "300px",
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center"
    }}>
        <Box fontSize="4rem" fontWeight="500">Sign Up</Box>
        
        {/* <Box height="300px">
            <img alt="card" src={Card} style={{ width: "100%", height: "auto" }}/>
        </Box> */}
    </Box>
  );
}

export default SignUp;