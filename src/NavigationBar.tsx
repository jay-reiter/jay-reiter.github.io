import {
  Box,
  Button,
  Icon,
  IconButton,
  IconButtonProps,
  Menu,
  Typography,
  withStyles,
  Link,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
// import "./NavigationBar.css";
import HomeIcon from "@material-ui/icons/Home";
import theme from "./theme/theme";

interface DropdownLink {
  name: string;
  path: string;
}

interface NavButtonProps {
  tabName: string;
  dropdownContent?: DropdownLink[];
}

interface StyledMenuProps {}

const StyledMenu: React.FC<StyledMenuProps> = ({ children }) => (
  <Menu
    open={false}
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...children}
  />
);

const NavButton: React.FC<NavButtonProps> = ({ tabName, dropdownContent }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls='customized-menu'
        aria-haspopup='true'
        variant='contained'
        onClick={handleClick}
        style={{
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          marginRight: "16px",
        }}
      >
        <Box>
          <Typography> {tabName}</Typography>
        </Box>
      </Button>

      <StyledMenu
      // id='customized-menu'
      // anchorEl={anchorEl}
      // keepMounted
      // open={Boolean(anchorEl)}
      // onClose={handleClose}
      >
        <Box p={"4px"} display='flex' flexDirection='column '>
          {dropdownContent?.map((elem: DropdownLink) => (
            <Link href={elem.path}>
              <Typography variant='subtitle1'>{elem.name}</Typography>
            </Link>
          ))}
        </Box>
      </StyledMenu>
    </>
  );
};

function NavigationBar() {
  const [name, set] = useState("Home");
  const currentTab = { name, set };

  return (
    <Box
      style={{ width: "100%", backgroundColor: theme.palette.grey[300] }}
      p={1}
      mt={2}
      borderRadius={6}
      display='flex'
    >
      <IconButton style={{ marginRight: "8px" }}>
        <HomeIcon />
      </IconButton>
      <NavButton
        tabName={"Code Projects"}
        dropdownContent={[
          {
            name: "Website for Illinois Breastfeeding Mothers",
            path: "/breastfeeding-site",
          },
          {
            name: "Visualizing p-adic Power Series in C++",
            path: "/PadicVisualization",
          },
          {
            name: "Data Analysis of CPD Racial Bais",
            path: "/cpd-racial-bias",
          },
          {
            name: "This Website!",
            path: "/website",
          },
        ]}
      />
      <NavButton
        tabName={"Research"}
        dropdownContent={[
          {
            name: "Quantum Computing and Khovanov Homology",
            path: "/research/qcat",
          },
          {
            name: "P-adic Numbers and the Artin Hasse Exponential",
            path: "/research/padic-artin-hasse",
          },
        ]}
      />
      <NavButton
        tabName={"Games"}
        dropdownContent={[
          { name: "Tic-Tac-Toe", path: "/games/TicTacToe" },
          { name: "Chess", path: "/games/Chess" },
        ]}
      />
    </Box>
  );
}

export default NavigationBar;
