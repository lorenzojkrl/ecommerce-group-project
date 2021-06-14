import React from "react";
import "@fontsource/roboto";
import {
  CssBaseline,
  Typography,
  Container,
  TextField,
} from "@material-ui/core";
import FirstContainer from "../Containers/FirstContainer";
import { TrustBadgeContainer } from "../Containers/TrustBadgeContainer";

export default function Body() {
  return (
    <section>
      <CssBaseline />
      {/* First container */}
      <FirstContainer />

      {/* Second Container */}
      <Container
        disableGutters={true}
        maxWidth="xl"
        style={{ backgroundColor: "grey.300", height: "65ch" }}
      ></Container>

      {/* Third container */}
      <TrustBadgeContainer />

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
            <form noValidate autoComplete="off">
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
    </section>
  );
}
