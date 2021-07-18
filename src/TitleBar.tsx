import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  IconButton,
  Typography,
  useTheme,
  Tooltip,
  Link,
} from "@material-ui/core";

import github_png from "./assets/icons/github.png";
import linkedin_png from "./assets/icons/linkedin.png";
import profile_pic from "./assets/pictures/profile_pic.png";
import NavigationBar from "./NavigationBar";

function TitleBar() {
  const theme = useTheme();
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="column" style={{ maxWidth: "80%" }}>
          <Typography variant="h1" style={{ fontSize: "50pt" }}>
            Jay Reiter
          </Typography>
          <Box mt={1}>
            <Typography
              variant="h5"
              style={{ color: theme.palette.text.secondary }}
            >
              Hello! I'm a Math and Computer Science student at UIUC. I built
              this website to show you some of the projects I'm working on and
              stuff I'm interested in.
            </Typography>
          </Box>
          <Box pt={1} display="flex" flexDirection="row">
            <Link style={{ color: theme.palette.primary.contrastText }}>
              <Typography variant="subtitle1">jayr2@illinois.edu</Typography>
            </Link>
            <Link
              style={{
                color: theme.palette.primary.contrastText,
                paddingLeft: "16px",
              }}
            >
              <Typography variant="subtitle1">(630) 487-0193</Typography>
            </Link>
          </Box>
        </Box>
        <Box
          flexDirection="column"
          justifyContent="center"
          alignContent="flex-start"
          style={{ maxWidth: "30%" }}
        >
          <Box display="flex" justifyContent="center">
            <Avatar
              style={{
                width: "120px",
                height: "120px",
                backgroundColor: "transparent",
              }}
            >
              <img
                src={profile_pic}
                alt="Profile Picture"
                height="120px"
                width="120px"
              />
            </Avatar>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignContent="flexStart"
          >
            <Tooltip title="My LinkedIn">
              <IconButton disableRipple disableTouchRipple>
                <img
                  src={linkedin_png}
                  alt="my_github"
                  height="40px"
                  width="40px"
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="My Github">
              <IconButton disableRipple disableTouchRipple>
                <img
                  src={github_png}
                  alt="my_github"
                  height="40px"
                  width="40px"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
      <NavigationBar />
    </Box>
  );
}

export default TitleBar;
