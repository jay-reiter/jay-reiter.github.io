import { Box, Button, Typography, Divider } from "@mui/joy";
import React from "react";

interface NavButtonProps {
  path: string;
  name: string;
  locked?: boolean;
}

const NavButton = ({ path, name, locked }: NavButtonProps) => {
  return (
    <Button
      component='a'
      href={path}
      variant='plain'
      disabled={locked}
      sx={{ marginX: "8px" }}
    >
      <Typography
        level='title-md'
        fontWeight='400'
        textColor={locked ? "neutral.softDisabledColor" : "neutral"}
      >
        {name}
      </Typography>
    </Button>
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
    <Box width={0.8} my={1} display='flex' justifyContent='right'>
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
