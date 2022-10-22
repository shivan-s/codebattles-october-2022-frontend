import { Pagination, Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Error from "../../components/Error";
import { AdvocateProps } from "../../interfaces";
import apiClient from "../../lib/httpCommon";
import AdvocateCard from "./AdvocateCard";
import CustomLoading from "./CustomLoading";

const AdvocateListView: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const fetchAdvocates = async (page: number) => {
    const res = await apiClient.get(`/advocates/?page=${page}`);
    return res.data;
  };

  const { data, error, isError, isLoading, isSuccess, isFetching } = useQuery(
    ["advocates", page],
    () => fetchAdvocates(page),
    {
      enabled: true,
      keepPreviousData: true,
    },
  );

  if (isError) {
    console.log(error);
  }

  return (
    <>
      {isError && <Error />}
      {isLoading || (isFetching && <CustomLoading />)}
      {isSuccess && data && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Pagination
            count={data?.pagination.total_pages}
            variant="outlined"
            page={page}
            size="large"
            onChange={(event, value) => setPage(value)}
          />
          {data?.advocates.map((advocate: AdvocateProps) => {
            return (
              <>
                <AdvocateCard key={advocate.username} {...advocate} />
              </>
            );
          })}
          <Pagination
            count={data?.pagination.total_pages}
            variant="outlined"
            page={page}
            size="large"
            onChange={(event, value) => setPage(value)}
          />
        </Box>
      )}
    </>
  );
};
export default AdvocateListView;
