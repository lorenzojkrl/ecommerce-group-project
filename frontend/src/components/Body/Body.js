import React from "react";
import "@fontsource/roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import TextField from "@material-ui/core/TextField";
import { useStyles } from "./BodyStyles";
import { TrustBadgeContainer } from "../Containers/TrustBadgeContainer";

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

      <Container disableGutters={true} maxWidth="xl">
        <Box display="flex">
          <Box p={25} bgcolor="grey.300">
            Item 1
          </Box>
        </Box>
      </Container>

      {/* Third container */}
      <TrustBadgeContainer classes={classes} />

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
