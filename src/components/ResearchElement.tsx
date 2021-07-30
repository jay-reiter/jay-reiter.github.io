// import "./ResearchElement.css";
import React from "react";
import { Typography, Box, useTheme, Link } from "@material-ui/core";
import LaunchIcon from "@material-ui/icons/Launch";

interface ResearchElementProps {
  title: string;
  startDate?: string;
  endDate?: string;
  location?: string;
  organization?: string;
  organizationLink?: string;
}

const ResearchElement: React.FC<ResearchElementProps> = ({
  title,
  startDate,
  endDate = "Present",
  location,
  organization,
  organizationLink,
}) => {
  const theme = useTheme();
  return (
    <>
      <Box width='100%' display='flex' justifyContent='center'>
        <Box display='flex' flexDirection='column' maxWidth='80%'>
          <Box
            display='flex'
            justifyContent='center'
            flexDirection='column'
            m={2}
          >
            <Box display='flex' justifyContent='center'>
              <Typography
                variant='h2'
                style={{ fontSize: "40pt" }}
                align='center'
                gutterBottom
              >
                {title}
              </Typography>
            </Box>
            {startDate ? (
              <Box
                display='flex'
                flexDirection='row'
                justifyContent={organization ? "space-around" : "center"}
              >
                <Typography variant='h5'>
                  {startDate} &#x2014; {endDate}
                </Typography>
                {organization ? (
                  <Box display='flex' flexDirection='row'>
                    <Box
                      display='flex'
                      flexDirection='column'
                      alignItems='flex-end'
                    >
                      {organizationLink ? (
                        <Link
                          href={organizationLink}
                          style={{ cursor: "pointer" }}
                        >
                          <Typography variant='h5'>{organization}</Typography>
                        </Link>
                      ) : (
                        <Typography variant='h5'>{organization}</Typography>
                      )}
                      <Typography variant='subtitle2'>{location}</Typography>
                    </Box>
                    {organizationLink ? (
                      <LaunchIcon
                        style={{
                          fontSize: "small",
                          marginTop: "6px",
                          marginLeft: "2px",
                          color: theme.palette.grey[600],
                        }}
                      />
                    ) : null}
                  </Box>
                ) : null}
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ResearchElement;
