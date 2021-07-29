import {
  Avatar,
  Box,
  IconButton,
  Typography,
  useTheme,
  Tooltip,
  Link,
  Button,
} from "@material-ui/core";

import github_png from "./assets/icons/github.png";
import linkedin_png from "./assets/icons/linkedin.png";
import profile_pic from "./assets/pictures/profile_pic.png";
import NavigationBar from "./NavigationBar";
import React from "react";

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
              stuff I'm interested in. Here is my{" "}
              <a href="/assets/resume.pdf">
                <Link
                  style={{
                    color: theme.palette.primary.contrastText,
                    cursor: "pointer",
                  }}
                >
                  resume
                </Link>
              </a>
              .
            </Typography>
          </Box>
          <Box pt={1} display="flex" flexDirection="row">
            <Link
              style={{
                color: theme.palette.primary.contrastText,
                cursor: "pointer",
              }}
            >
              <Typography variant="subtitle1">jayr2@illinois.edu</Typography>
            </Link>
            <Link
              style={{
                color: theme.palette.primary.contrastText,
                cursor: "pointer",
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
                alt="Profile"
                height="120px"
                width="120px"
              />
            </Avatar>
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignContent="flexStart"
            >
              <Tooltip title="My LinkedIn">
                <a href="https://www.linkedin.com/in/jayreiter1/">
                  <IconButton disableRipple disableTouchRipple>
                    <img
                      src={linkedin_png}
                      alt="my_github"
                      height="40px"
                      width="40px"
                    />
                  </IconButton>
                </a>
              </Tooltip>
              <Tooltip title="My Github">
                <a href="https://github.com/jay-reiter">
                  <IconButton disableRipple disableTouchRipple>
                    <img
                      src={github_png}
                      alt="my_github"
                      height="40px"
                      width="40px"
                    />
                  </IconButton>
                </a>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
      <NavigationBar />
    </Box>
  );
}

export default TitleBar;
