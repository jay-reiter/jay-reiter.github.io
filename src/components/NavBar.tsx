import { Box, Button, Typography, Divider } from "@mui/joy";
import React from "react";
import { NavLink } from "react-router-dom";

interface NavButtonProps {
  path: string;
  name: string;
  locked?: boolean;
}

const NavButton = ({ path, name, locked }: NavButtonProps) => {
  function button(isActive: boolean) {
    return (
      <Button variant='plain' disabled={locked} sx={{ marginX: "8px" }}>
        <Typography
          level='title-md'
          fontWeight='400'
          textColor={
            locked
              ? "neutral.softDisabledColor"
              : isActive
              ? "primary.500"
              : "neutral.500"
          }
        >
          {name}
        </Typography>
      </Button>
    );
  }

  return (
    <>
      {locked ? (
        button(false)
      ) : (
        <NavLink to={path}>{({ isActive }) => button(isActive)}</NavLink>
      )}
    </>
  );
};

const NavBar = () => {
  const navButtons = [
    <NavButton path='/' name='Home' />,
    <NavButton path='/math' name='Math' />,
    <NavButton path='/teaching' name='Teaching' locked />,
    <NavButton path='/dubtop-fall-2025' name='DubTop Fall 2025' locked />,
  ];

  return (
    <Box width={0.8} mt={1} display='flex' justifyContent='right'>
      <>
        {navButtons.map((button, index) => {
          return (
            <>
              {button}
              {index < navButtons.length - 1 && (
                <Divider orientation='vertical' />
              )}
            </>
          );
        })}
      </>
    </Box>
  );
};

export default NavBar;
