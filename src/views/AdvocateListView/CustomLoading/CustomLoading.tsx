import { Card, CardContent, Pagination, Skeleton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CustomLoading: React.FC = () => {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Pagination size="large" variant="outlined" count={10} />
        {Array.from(Array(20).keys()).map((idx: number) => {
          return (
            <Card key={idx}>
              <CardContent>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Skeleton variant="circular" width={40} height={40} />
                  <Box sx={{ width: "100px" }}>
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                    <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </>
  );
};

export default CustomLoading;
