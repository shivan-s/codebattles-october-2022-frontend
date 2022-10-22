import { Icon, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";

const CustomLoading: React.FC = () => {
  return (
    <>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Skeleton variant="rounded" width={190} height={190} />
        <Box sx={{ width: "70%" }}>
          <Skeleton variant="text" sx={{ fontSize: "2rem", width: "150px" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100px" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "100px" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1rem", width: "80%" }} />
          <Icon>
            <TwitterIcon />
          </Icon>
        </Box>
      </Box>
    </>
  );
};

export default CustomLoading;
