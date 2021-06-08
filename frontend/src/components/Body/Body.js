import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
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
      <Container
        disableGutters={true}
        maxWidth="xl"
        style={{ backgroundColor: "#FFF0E5", height: "100vh" }}
      >
        <Typography component="div" variant="h1" className={classes.root}>
          We innovate your <br /> online shopping <br /> experience
          <br />
        </Typography>
      </Container>

      {/* Second Container */}
      <Container
        disableGutters={true}
        maxWidth="xl"
        style={{ backgroundColor: "grey.300", height: "100vh" }}
      ></Container>

      {/* Third Container */}
      <Container
        disableGutters={true}
        maxWidth="xl"
        style={{ backgroundColor: "#FFF0E5", height: "80vh" }}
      >
        <Typography component="div" variant="h3">
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
      <Container
        disableGutters={true}
        maxWidth="xl"
        style={{ backgroundColor: "#FFF0E5", height: "80vh" }}
      >
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
