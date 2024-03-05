/* eslint-disable no-undef */
import { Box } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../../Routes";
import { Colors, DrawerWidth } from "../../styles/theme";
import styled from "@emotion/styled";
import NewDrawer, { DrawerHeader } from "../domain/NewDrawer";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${DrawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const Admin = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        bacground: Colors.background,
        height: "100vh",
      }}
    >
      <Router>
        <NewDrawer open={open} setOpen={setOpen} />
        <Main open={open}>
          <DrawerHeader/>
          <AppRoutes />
        </Main>
      </Router>
    </Box>
  );
};

export default Admin;
