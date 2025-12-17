import { Box, ButtonGroup, Button } from "@mui/joy";


const NavBar = () => {
  return (
    <Box width={1} my={1}>
      <ButtonGroup variant='plain' sx={{ float: "right" }}>
        <Button component='a' href='/' variant='plain'>
          Home
        </Button>
        <Button component='a' href='/math' variant='plain'>
          Math
        </Button>
        <Button component='a' href='/teaching' variant='plain'>
          Teaching
        </Button>
        <Button component='a' href='/dubtop-fall-2025' variant='plain'>
          DubTop Fall 2025
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default NavBar;
