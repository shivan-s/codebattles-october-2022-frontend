import { Alert, AlertTitle } from "@mui/material";
import React from "react";

const Error: React.FC = () => {
  return (
    <>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>Something went wrong!
      </Alert>
    </>
  );
};

export default Error;
