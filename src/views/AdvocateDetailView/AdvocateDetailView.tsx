import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import apiClient from "../../lib/httpCommon";
import TwitterIcon from "@mui/icons-material/Twitter";
import Error from "../../components/Error";
import CustomLoading from "./CustomLoading";

const AdvocateDetailView: React.FC = () => {
  const params = useParams();
  const fetchAdvocate = async () => {
    const res = await apiClient.get(`/advocates/${params.username}`);
    return res.data;
  };

  const { data, error, isError, isLoading, isSuccess } = useQuery(
    ["advocate", params.username],
    () => fetchAdvocate(),
    {
      enabled: true,
    },
  );

  if (isError) {
    console.log(error);
  }

  return (
    <>
      {isError && <Error />}
      {isLoading && <CustomLoading />}
      {isSuccess && data && (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar
                variant="rounded"
                sx={{ width: "190px", height: "190px" }}
                alt={data?.advocate.username}
                src={data?.advocate.profile_pic}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h4">{data?.advocate.username}</Typography>
                <Typography variant="subtitle1">
                  {data?.advocate.name}
                </Typography>
                <Typography variant="subtitle2">
                  {data?.advocate.follower_count} followers
                </Typography>
                <Typography variant="body1">{data?.advocate.bio}</Typography>
                <Box>
                  <IconButton href={data?.advocate.twitter}>
                    <TwitterIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Typography variant="h6">Companies</Typography>
            <List>
              <ListItem>
                <ListItemText>
                  {data?.advocate.companies.map((company: number) => company)}
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </>
      )}
    </>
  );
};
export default AdvocateDetailView;
