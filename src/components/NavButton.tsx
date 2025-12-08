import { Box, Button, Typography } from "@mui/material";

interface NavButtonProps {
  buttonName: string;
  targetPath: string;
}

const NavButton: React.FC<NavButtonProps> = ({ buttonName, targetPath }) => {
  return (
    <Button href={targetPath} disableElevation>
      <Box>
        <Typography>{buttonName}</Typography>
      </Box>
    </Button>
  );
};

export default NavButton;
