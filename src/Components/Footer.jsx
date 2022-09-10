import { Box, Typography, IconButton } from "@mui/material";
import styled from "styled-components";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const companyLinks = [
    "About",
    "Careers",
    "Affiliates",
    "Blog",
    "Press",
    "Investors",
    "Legal & Privacy",
    "Cookie policy",
    "Cookie preferences",
  ];
  const learnLinks = [
    "Browse crypto prices",
    "Coinbase Bytes newsletter",
    "Crypto basics",
    "Tips & Turoials",
    "Market Updates",
    "What is Bitcoin?",
    "What is crypto?",
    "What is a blockchain?",
    "How to set up a crypto waller",
    "How to send crypto",
  ];
  const clickEvent = (e) => {
    e.preventDefault();
  };
  return (
    <Box width="90%" margin="0 auto 2rem" >
      <Box sx={__body}>
        <Box
          flex="1 1 31%"
          sx={{
            display: "flex",
            flexDirection: "column",
            "@media(max-width: 820px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "500",
              "@media(max-width: 820px)": {
                fontSize: "2rem",
              },
            }}
          >
            Coinbase
          </Typography>

          <Typography
            sx={{
              color: "rgb(200, 197, 197)",
              fontWeight: "600",
              "@media(max-width: 412px)": {
                textAlign: "center",
              },
            }}
            gutterBottom
          >
            GymVast, 18 East 50th Street, 4th Floor, New York, NY 10022
          </Typography>

          <Typography
            sx={{
              color: "rgb(200, 197, 197)",
              fontWeight: "600",
              "@media(max-width: 412px)": {
                textAlign: "center",
              },
            }}
            gutterBottom
          >
            T : +1-202-555-0184E : crypto@coinbase.com
          </Typography>

          <Box m="2rem 0" display="flex" gap="1rem">
            <IconButton
              style={{ backgroundColor: "White", color: "#021338fa" }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              style={{ backgroundColor: "White", color: "#021338fa" }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              style={{ backgroundColor: "White", color: "#021338fa" }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              style={{ backgroundColor: "White", color: "#021338fa" }}
            >
              <YouTubeIcon />
            </IconButton>

            <IconButton
              style={{ backgroundColor: "White", color: "#021338fa" }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          flex="1 1 23%"
          sx={{
            display: "flex",
            flexDirection: "column",
            "@media(max-width: 820px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Typography fontSize="1.5rem" fontWeight="500" gutterBottom>
            Company
          </Typography>
          <UL>
            {companyLinks.map((link) => {
              return (
                <li>
                  <Anchor href="/" onClick={clickEvent}>
                    {link}
                  </Anchor>
                </li>
              );
            })}
          </UL>
        </Box>

        <Box
          flex="1 1 23%"
          sx={{
            display: "flex",
            flexDirection: "column",
            "@media(max-width: 820px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Typography fontSize="1.5rem" fontWeight="500" gutterBottom>
            Learn
          </Typography>
          <UL>
            {learnLinks.map((link) => {
              return (
                <li>
                  <Anchor href="/" onClick={clickEvent}>
                    {link}
                  </Anchor>
                </li>
              );
            })}
          </UL>
        </Box>

        <Box
          flex="1 1 23%"
          sx={{
            display: "flex",
            flexDirection: "column",
            "@media(max-width: 820px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Typography fontSize="1.5rem" fontWeight="500" gutterBottom>
            Office
          </Typography>
          <UL>
            {companyLinks.map((link) => {
              return (
                <li>
                  <Anchor href="/" onClick={clickEvent}>
                    {link}
                  </Anchor>
                </li>
              );
            })}
          </UL>
        </Box>
      </Box>
      <Typography textAlign="center">
        © Coinbase Personal Template by Amandeep Singh
      </Typography>
    </Box>
  );
}

export default Footer;

// Styles

const __body = {
  width: "100%",
  margin: "5rem auto",
  display: "flex",
  gap: "4rem",
  "@media(max-width: 820px)": {
    flexDirection: "column",
    alignItems: "center",
  },
};

const Anchor = styled.a`
  text-decoration: none;
  color: rgb(200, 197, 197);
  font-weight: 600;
  &:hover {
    color: White;
  }
`;

const UL = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  flex-direction: column;

  @media (max-width: 820px) {
    align-items: center;
  }
`;
