import React from "react";
import { Menu, ChevronLeft, ChevronRight } from "@material-ui/icons";
import { useStyles, useTheme } from './NavBarStyles';
import clsx from "clsx";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";

export default function PersistentDrawerLeft(props) {
  const classes = useStyles(props);
  const theme = useTheme(props);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        className={
          clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }) && classes.root
        }
        style={{ position: "relative" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Logo
          </Typography>

          <Button color="inherit" className={classes.close_btn}>
            About
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Contact
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Login
          </Button>
          <Button color="inherit" className={classes.close_btn}>
            Sign Up
          </Button>
        </Toolbar>

        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["About", "Contact", "Sign Up", "Login"].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </div>
  );
}
