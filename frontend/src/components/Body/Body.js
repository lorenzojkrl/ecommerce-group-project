import React from "react";
import "@fontsource/roboto";
import {
  CssBaseline,
  Typography,
  Container,
  TextField,
  Grid,
  Box,
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core";
import { useStyles } from "./BodyStyles";
import { TrustBadgeContainer } from "../Containers/TrustBadgeContainer";
import MacBook from "../../assets/images/MacBook.svg";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Body() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />

        {/* First container */}
        <Container
          disableGutters={true}
          maxWidth={false}
          style={{ backgroundColor: "#FFF0E5", height: "65ch" }}
        >
          <Grid container spacing={0} justify="center">
            <Grid item style={{ flexGrow: 1 }} component="div" display="inline">
              <Grid
                container
                spacing={0}
                justify="center"
                alignItems="stretch"
                direction="column"
              >
                <Box
                  m={1}
                  textAlign="center"
                  position="absolute"
                  top={150}
                  left="10%"
                  lineHeight={2}
                >
                  <Typography
                    variant="h2"
                    className={classes.root}
                    direction="column"
                    container
                  >
                    We innovate your <br /> online shopping <br /> experience
                    <br />
                  </Typography>
                  <br />
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    className={classes.subtitle1}
                    container
                  >
                    What do you wanna shop today? <br /> What do you need? Just
                    tell us.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid item style={{ flexGrow: 1 }} component="div" display="inline">
              <Grid
                container
                spacing={0}
                justify="center"
                alignItems="stretch"
                direction="column"
              >
                <Box
                  m={1}
                  textAlign="right"
                  position="absolute"
                  top={170}
                  left="60%"
                  className={classes.display_macbook}
                >
                  <img src={MacBook} alt="macbook" width="450" />
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>

        {/* Second Container */}
        <Container
          disableGutters={true}
          maxWidth="xl"
          style={{ backgroundColor: "grey.300", height: "65ch" }}
        ></Container>

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
    </MuiThemeProvider>
  );
}
