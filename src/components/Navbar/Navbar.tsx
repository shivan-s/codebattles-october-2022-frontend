import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";

const NavbarButtonTypography: React.FC<React.PropsWithChildren> = (props) => {
  const theme = useTheme();
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, color: theme.palette.primary.contrastText }}
    >
      {props.children}
    </Typography>
  );
};

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Button component={RouterLink} to="/">
            <NavbarButtonTypography>Home</NavbarButtonTypography>
          </Button>
          <Button component={RouterLink} to="/advocates">
            <NavbarButtonTypography>Advocates</NavbarButtonTypography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
