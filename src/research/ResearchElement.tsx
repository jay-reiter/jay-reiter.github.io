// import "./ResearchElement.css";
import React from "react";
import { Typography, Box } from "@material-ui/core";

interface ResearchElementProps {
  title: string;
}

const ResearchElement: React.FC<ResearchElementProps> = ({ title }) => {
  return (
    <>
      <Box display="flex" justifyContent="center" m={2}>
        <Typography variant="h3">{title}</Typography>
      </Box>
    </>
  );
};

export default ResearchElement;
