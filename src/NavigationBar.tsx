import {
  Box,
  Button,
  Icon,
  IconButton,
  IconButtonProps,
  Menu,
  Typography,
  withStyles,
  MenuProps,
  MenuItem,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
// import "./NavigationBar.css";
import HomeIcon from "@material-ui/icons/Home";
import theme from "./theme/theme";
import { Link } from "react-router-dom";

interface DropdownLink {
  name: string;
  path: string;
}

interface NavButtonProps {
  tabName: string;
  dropdownContent?: DropdownLink[];
}

export const toRouterPath = (name: string) => {
  return name.toLowerCase().replaceAll(" ", "-");
};

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
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
    {...props}
  />
));

const NavButton: React.FC<NavButtonProps> = ({ tabName, dropdownContent }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
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
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Box px={1}>
          {dropdownContent?.map((elem: DropdownLink) => (
            <Link to={`/${toRouterPath(tabName)}/${elem.path}`}>
              <Typography variant="subtitle1">{elem.name}</Typography>
            </Link>
          ))}
        </Box>
      </StyledMenu>
    </>
  );
};

function NavigationBar() {
  const [name, set] = useState("Home");

  return (
    <Box
      style={{ width: "100%", backgroundColor: theme.palette.grey[300] }}
      p={1}
      mt={2}
      borderRadius={6}
      display="flex"
      justifyContent="space-between"
    >
      <Box>
        <Link to="/">
          <IconButton style={{ marginRight: "8px" }}>
            <HomeIcon />
          </IconButton>
        </Link>
        <NavButton
          tabName={"Code Projects"}
          dropdownContent={[
            {
              name: "Visualizing p-adic Power Series in C++",
              path: "padic-visualization",
            },
            {
              name: "Website for Illinois Breastfeeding Mothers",
              path: "breastfeeding-site",
            },
            {
              name: "Data Analysis of CPD Racial Bais",
              path: "cpd-racial-bias",
            },
            {
              name: "This Website!",
              path: "website",
            },
          ]}
        />
        <NavButton
          tabName={"Research"}
          dropdownContent={[
            {
              name: "Quantum Computing and Khovanov Homology",
              path: "qcat",
            },
            {
              name: "P-adic Numbers and the Artin Hasse Exponential",
              path: "padic-artin-hasse",
            },
          ]}
        />
        <NavButton
          tabName={"Games"}
          dropdownContent={[
            { name: "Tic-Tac-Toe", path: "tic-tac-toe" },
            { name: "Chess", path: "chess" },
          ]}
        />
      </Box>
    </Box>
  );
}

export default NavigationBar;
