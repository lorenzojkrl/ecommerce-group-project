import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "@fontsource/roboto";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    fontStyle: "bold",
    fontWeight: 400,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Body() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      {/* First container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#FFF0E5", height: "80vh" }}
          variant="h1"
          className={classes.root}
        >
          We innovate your <br /> online shopping <br /> experience
          <br />
          <Typography variant="subtitle1">
            What do you want to shop today? What do you need? Just tell us.
          </Typography>
        </Typography>
      </Container>

      {/* Second container */}
      <Container disableGutters={true} maxWidth="xl">
        <Box display="flex">
          <Box p={25} bgcolor="grey.300">
            Item 1
          </Box>

        </Box>
      </Container>

      {/* Third container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#FFF0E5", height: "80vh" }}
          variant="h3"
        >
          Trusted By
          <Avatar alt="Remy Sharp" src="/broken-image.jpg">
            B
          </Avatar>
          <Avatar
            alt="Remy Sharp"
            src="/broken-image.jpg"
            className={classes.orange}
          />
          <Avatar src="/broken-image.jpg" />
        </Typography>
      </Container>

      {/* Fourth container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#F0F5EF", height: "80vh" }}
          variant="h3"
          gutterBottom
        >
          Newsletter
          <Typography
            component="div"
            style={{ backgroundColor: "#F0F5EF", height: "80vh" }}
            variant="subtitle1"
          >
            Join us now! It's free!
            <form classes={classes.root} noValidate autoComplete="off">
              <TextField
                id="filled-secondary"
                label="email"
                variant="filled"
                color="secondary"
              />
            </form>
          </Typography>
        </Typography>
        
      </Container>
    </React.Fragment>
  );
}
