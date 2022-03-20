import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

declare module "@mui/material/Card" {
  interface CardPropsVariantOverrides {
    feature: true;
    side: true;
    blog: true;
  }
}

const baseTheme = createTheme({});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontWeight: 400,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {},
        colorDefault: {
          backgroundColor: baseTheme.palette.common.black,
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: {
            // @ts-ignore
            variant: "feature",
          },
          style: {
            maxWidth: 300,
            "& .MuiCardMedia-img": {
              objectFit: "contain",
            },
            "& .MuiCardContent-root": {
              textAlign: "center",
            },
            "& .MuiCardActions-root": {
              justifyContent: "center",
            },
          },
        },
        {
          props: {
            // @ts-ignore
            variant: "side",
          },
          style: {
            display: "flex",
            [baseTheme.breakpoints.down("md")]: {
              flexDirection: "column",
              padding: 24,
            },
            "& .MuiCardMedia-img": {
              objectFit: "cover",
              flex: "50%",
              height: 400,
              borderRadius: 16,
              margin: 24,
              boxShadow:
                "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
              [baseTheme.breakpoints.down("xl")]: {
                height: 320,
              },
              [baseTheme.breakpoints.down("lg")]: {
                height: 240,
              },
              [baseTheme.breakpoints.down("md")]: {
                margin: 0,
                flex: "auto",
                height: 256,
              },
            },
            "& .MuiCardContent-root": {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            },
          },
        },
        {
          props: {
            // @ts-ignore
            variant: "blog",
          },
          style: {
            width: 240,
            minHeight: 330,
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
            flexDirection: "column",
            "& .MuiCardMedia-img": {
              objectFit: "cover",
              height: 180,
            },
            "& .MuiCardContent-root": {
              textAlign: "center",
            },
            "& .MuiTypography-h5": {
              fontSize: 18,
              fontWeight: 700,
            },
            "& .MuiTypography-body1": {
              fontSize: 12,
            },
            "& .MuiCardActions-root": {
              width: "100%",
            },
            "& div:first-of-type": {
              justifyContent: "flex-start",
            },
          },
        },
        {
          props: {
            // @ts-ignore
            variant: "quote",
          },
          style: {
            margin: 8,
            flexDirection: "column",
            minHeight: 180,
            width: 320,
            boxShadow:
              "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
            "& .MuiCardMedia-img": {
              objectFit: "cover",
              height: 50,
              width: 50,
              borderRadius: "50%",
              marginLeft: 16,
              marginTop: 16,
            },
            "& .MuiTypography-h5": {
              fontSize: 12,
              fontWeight: 700,
            },
            "& .MuiTypography-body1": {
              fontSize: 18,
            },
            "& .MuiCardActions-root": {
              display: "none",
            },
            "& div:first-of-type": {
              justifyContent: "flex-start",
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          display: "flex",
        },
      },
    },
  },
});

export default theme;
