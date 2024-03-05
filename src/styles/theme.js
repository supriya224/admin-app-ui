/* eslint-disable no-undef */
import { createTheme } from "@mui/material";

export const DrawerWidth = 250;
// colors

export const Colors = {
  primary: "#E5E4E2",
  secondary: "#ba68c8",
  success: "#4CAF50",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#FFC107",
  dark: "#be1b20",
  light: "#aaa",
  muted: "#abafb3",
  shaft: "#333",
  transarent: "#00000000",
  bacground: "#F5F5F5",
  inverse: "#2F3D4A",
  border: "#DDDFEI”",
  dim_grey: "#696969",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  light_gray: "rgb(230,230,230)",
  white: "#fff",
  black: "#000",
};
// utils
export const cssUtils = {
  boxShadow: "rgba(149,157,165,0.2) 0px 8px 24px",
};
// create theme
const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MultiAppBar:{
        styleOverrides:{
            root:{background:Colors.transarent},
        }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
      },
    },
    // MuiTooltip: {
    //   defaultProps: {
    //     arrbw: true,
    //   },
    //   styleOverrides: {
    //     tooltip: {
    //       background: Colors - primary,
    //     },
    //     arrow: {
    //       color: Colors.primary,
    //     },
    //   },
    // },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: DrawerWidth,
          background: Colors.transarent,
          color: Colors.light,
        //   borderRadius: "Opx 100px 0px 0px",
        //   borderRight: `1px solid ${Colors.primary}`,
        }
      }
    },
    // MuiDivider: {
    //   styleOverrides: {
    //     root: {
    //       borderColor: lighten(0.2, Colors.primary),
    //     },
    //   }

    // },
    // MyShopButton: {
    //   styleOverrides: {
    //     root: {
    //       color: Colors.white,
    //     },
    //     primary: {
    //       background: Colors.primary,
    //       "&: hover": {
    //         background: lighten(0.05, Colors.primary),
    //       },
    //     },
    //     secondary: {
    //       background: `${Colors.secondary}`,
    //       "&: hover": {
    //         background: lighten(0.05, Colors.primary),
    //       },
    //     },
    //   },
    // },
  },
});
export default theme;