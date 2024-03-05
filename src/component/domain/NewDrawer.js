/* eslint-disable no-undef */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import { Colors } from "../../styles/theme";
import Appbar from "../core/AppBar";
import {
  Dashboard,
  DataUsageSharp,
  Settings,
  ShoppingBag,
} from "@mui/icons-material";
import { useNavigate, useNavigation } from "react-router-dom";


const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const MyListItemButton = ({
  selected,
  icon,
  text,
  handleNavbarItemClicked,
  item,
  index,
}) => {
  return (
    <ListItemButton
      onClick={() => handleNavbarItemClicked(text)}
      sx={{
        ...(selected && {
          background: Colors.white,
          borderRadius: 2,
          fontWeight: "bold",
          color: Colors.black,
        }),
      }}
    >
      <ListItemIcon sx={{ color: selected && Colors.primary }}>
        {icon}
        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export default function NewDrawer({ open, setOpen }) {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = React.useState("");
  const navigate= useNavigate()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavbarItemClicked = (item) => {
    setSelectedItem(item);
    navigate(item)
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          {open && (
            <Typography
              fontWeight={"bold"}
              color={Colors.black}
              variant="h6"
              noWrap
              component="div"
            >
              Products
            </Typography>
          )}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => ( */}
          <ListItem disablePadding>
            <MyListItemButton
              handleNavbarItemClicked={handleNavbarItemClicked}
              icon={<Dashboard />}
              text={"dashboard"}
              selected={selectedItem.includes("dashboard")}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListItemButton
              handleNavbarItemClicked={handleNavbarItemClicked}
              icon={<ShoppingBag />}
              text={"Products"}
              selected={selectedItem.includes("products")}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListItemButton
              handleNavbarItemClicked={handleNavbarItemClicked}
              icon={<Settings />}
              text={"setting"}
              selected={selectedItem.includes("setting")}
            />
          </ListItem>
          <ListItem disablePadding>
            <MyListItemButton
              handleNavbarItemClicked={handleNavbarItemClicked}
              icon={<DataUsageSharp />}
              text={"customers"}
              selected={selectedItem.includes("customers")}
            />
          </ListItem>
         
        

          <ListItem disablePadding>
            <MyListItemButton
              handleNavbarItemClicked={handleNavbarItemClicked}
              icon={<MailIcon />}
              text={"messages"}
              selected={selectedItem.includes("messages")}
            />
          </ListItem>
          {/* ))} */}
        </List>

        {/* </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
