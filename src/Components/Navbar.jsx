import { Box, Button } from "@mui/material";
import styled from "styled-components";

function Navbar() {
  const links = ["Home", "Dashboard", "Learn", "FAQ", "Contact", "About"];
  const clickEvent = (e) => {
    e.preventDefault();
  };
  return (
    <Box sx={__navbar}>
      <Box sx={{
        fontSize: "3rem",
        fontWeight: "500",
        "@media(max-width: 820px)": {
          fontSize: "2rem"
      }
    }}>
      Coinbase
    </Box>

      <Box>
        <ul style={__list}>
          {links.map((link) => {
            return (
              <li>
                <Anchor href="/" onClick={clickEvent}>
                  {link}
                </Anchor>
              </li>
            );
          })}
        </ul>
      </Box>

      <Box sx={{ display: "flex", gap: "1rem" }}>
        <Button variant="contained">Sign In</Button>
        <Button variant="text">Sign Up</Button>
      </Box>
    </Box>
  );
}

export default Navbar;

// Styles

const __navbar = {
  width: "90%",
  margin: "0 auto",
  padding: "1rem 0",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const __list = {
  display: "flex",
  listStyle: "none",
  gap: "1.5rem",
};

const Anchor = styled.a`
  text-decoration: none;
  color: rgb(200, 197, 197);
  font-weight: 600;
  &:hover {
    color: White;
  }
`;
