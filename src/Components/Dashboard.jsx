import { Box } from "@mui/material";

import price1 from "../Assets/price1.png";
import price2 from "../Assets/price2.png";
import price3 from "../Assets/price3.png";
import price4 from "../Assets/price4.png";
import bitcoin from "../Assets/bitcoin.png";
import ethereum from "../Assets/ethereum.png";
import ggcoin from "../Assets/ggcoin.png";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function createData(name, image, short, price, change, marketCap, chart) {
  return { name, image, short, price, change, marketCap, chart };
}

const rows = [
  createData(
    "Bitcoin",
    bitcoin,
    "BTC",
    "$ 33,592.99",
    "+4.3%",
    "$ 635.14B",
    price1
  ),
  createData(
    "Ethereum",
    ethereum,
    "ETH",
    "$ 2,273.19",
    "+2.1%",
    "$ 267.12B",
    price2
  ),
  createData("GGCoin", ggcoin, "GGC", "$ 349.47", "-7.9%", "$ 57.16B", price3),
  createData("Bitcoin", bitcoin, "BTC", "$ 0.9434", "0.0%", "$ 27.12B", price4),
];

function Dashboard() {
  return (
    <Box sx={__body}>

      <ThemeProvider theme={darkTheme}>
        <TableContainer style={{ backgroundColor: "#131830" }} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Change</TableCell>
                <TableCell align="right">Market Cap</TableCell>
                <TableCell align="right">Chart</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                        <Box><img alt="logo" src={row.image}/></Box>
                        <Box>{row.name}</Box>
                        <Box sx={{ color: "rgb(200, 197, 197)" }}>{row.short}</Box>
                    </Box>
                  </TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                  <TableCell align="right">{row.change}</TableCell>
                  <TableCell align="right">{row.marketCap}</TableCell>
                  <TableCell align="right">
                    <img alt="chart" src={row.chart} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
      
    </Box>
  );
}

export default Dashboard;

// #131830

// Styles

const __body = {
  width: "85%",
  margin: "8rem auto",
  display: "flex",
  gap: "2rem",
};
