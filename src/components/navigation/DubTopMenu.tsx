import {
  Dropdown,
  MenuButton,
  IconButton,
  Menu,
  MenuItem,
  ListItemDecorator,
  ListDivider,
  Typography,
} from "@mui/joy";
import { NavLink, useLocation } from "react-router-dom";

import Star from "@mui/icons-material/Star";

const DubTopMenu = () => {
  const isActive = useLocation().pathname.includes("dubtop");

  return (
    <Dropdown>
      <MenuButton variant='plain' color='primary' sx={{ marginX: "8px" }}>
        <Typography
          level='title-md'
          textColor={isActive ? "primary.500" : "neutral.500"}
          fontWeight={isActive ? "600" : "400"}
        >
          DubTop
        </Typography>
      </MenuButton>

      <Menu placement='bottom-end'>
        <MenuItem color='neutral'>
          <ListItemDecorator>
            <Star color='primary' />
          </ListItemDecorator>{" "}
          <NavLink
            to={"/dubtop-winter-2026"}
            style={{ textDecoration: "none" }}
          >
            <Typography>Winter 2026</Typography>
          </NavLink>
        </MenuItem>

        <ListDivider />

        {/* <MenuItem disabled color='neutral'>
          <ListItemDecorator />
          <Typography textColor='neutral.500'>Past Quarters:</Typography>
        </MenuItem> */}

        <MenuItem color='neutral'>
          <ListItemDecorator />
          <NavLink to={"/dubtop-fall-2025"} style={{ textDecoration: "none" }}>
            <Typography textColor='neutral.500'>Fall 2025</Typography>
          </NavLink>
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};

export default DubTopMenu;
