import { Box, Stack } from "@mui/material";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <Box sx={{ width: 1 }}>
      <Stack direction='row' spacing={4} justifyContent='flex-end'>
        <NavButton buttonName='Home' targetPath='/' />
        <NavButton buttonName='Math' targetPath='/math' />
        <NavButton buttonName='Teaching' targetPath='/teaching' />
        <NavButton
          buttonName='DubTop Fall 2025'
          targetPath='/dubtop-fall-2025'
        />
      </Stack>
    </Box>
  );
};

export default NavBar;
