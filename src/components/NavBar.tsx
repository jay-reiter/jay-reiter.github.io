import { Box, Divider } from "@mui/joy";
import NavButton from "./NavButton";

const NavBar = () => {
  const navButtons = [
    <NavButton path='/' name='Home' />,
    <NavButton path='/math' name='Math' />,
    <NavButton path='/teaching' name='Teaching' />,
    <NavButton path='/dubtop-fall-2025' name='DubTop Fall 2025' />,
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
