import React, { forwardRef, useMemo } from "react";
import {
  Box,
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  CardActionAreaProps,
} from "@mui/material";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";
import { AdvocateCardProps } from "./interfaces";

interface CardActionAreaLinkProps {
  to: any;
  children?: React.ReactNode;
}

const CardActionAreaLink: React.FC<
  React.PropsWithChildren<CardActionAreaLinkProps>
> = (props) => {
  const { to } = props;
  const renderLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, "to">>(
        function Link(itemProps, ref) {
          return (
            <RouterLink
              to={to}
              ref={ref}
              {...itemProps}
              role={undefined}
              style={{ textDecoration: "none" }}
            />
          );
        },
      ),
    [to],
  );

  return (
    <CardActionArea component={renderLink}>{props.children}</CardActionArea>
  );
};

const AdvocateCard: React.FC<AdvocateCardProps> = ({
  username,
  profile_pic,
  name,
}) => {
  return (
    <Card>
      <CardActionAreaLink to={`/advocates/${username}`}>
        <CardHeader
          avatar={<Avatar alt={username} src={profile_pic} />}
          title={username}
          subheader={<Box>{name}</Box>}
        />
      </CardActionAreaLink>
    </Card>
  );
};

export default AdvocateCard;
