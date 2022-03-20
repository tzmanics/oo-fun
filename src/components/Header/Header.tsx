import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import Link, { LinkProps } from "@components/Link";
import Media, { MediaProps } from "@components/Media";

interface ElevationScrollProps {
  children: React.ReactElement;
  disabled?: boolean;
}

function ElevationScroll({ children, disabled = false }: ElevationScrollProps) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return React.cloneElement(children, {
    elevation: trigger || disabled ? 4 : 0,
    color: trigger || disabled ? "default" : "transparent",
    sx: {
      ...((trigger || disabled) && {
        color: "white",
        "& img": { filter: "invert(1)" },
        "& *": { color: "white" },
      }),
    },
  });
}

export interface HeaderProps {
  title: string;
  links: LinkProps[];
  logo: MediaProps;
  disabledScroll?: boolean;
}

export default function Header({
  title,
  logo,
  links,
  disabledScroll,
}: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll disabled={disabledScroll}>
        <AppBar>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {logo && (
                <Link noLinkStyle href="/">
                  <Media
                    {...logo}
                    width={200}
                    height={30}
                    objectFit="contain"
                  />
                </Link>
              )}
              {title && (
                <Typography variant="h6" sx={{ ml: !!logo ? 2 : 1 }}>
                  {title}
                </Typography>
              )}
              <Box flex={1} width={1} />
              <Box display={["none", "block"]}>
                {links && (
                  <Grid
                    container
                    spacing={2}
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    {links?.map((link) => (
                      <Grid item key={link.id}>
                        <Link {...link} color="inherit" underline="none" />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Box>
              <IconButton
                sx={{ display: ["default", "none"] }}
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <SwipeableDrawer
        anchor={"left"}
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        sx={{ width: "50%", "& .MuiDrawer-paper": { width: "50%" } }}
      >
        <List>
          {links.map((link) => (
            <ListItem
              key={link.id}
              component={Link}
              href={link.href}
              noLinkStyle
            >
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </React.Fragment>
  );
}
