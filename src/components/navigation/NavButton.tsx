import { Button, Typography } from "@mui/joy";
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
          textColor={
            locked
              ? "neutral.softDisabledColor"
              : isActive
              ? "primary.500"
              : "neutral.500"
          }
          fontWeight={isActive ? "600" : "400"}
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

export default NavButton;
