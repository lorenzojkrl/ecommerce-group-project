import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function FixedContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* First Container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#FFF0E5", height: "65vh" }}
        ></Typography>
      </Container>

      {/* Second Container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#F0F5EF", height: "65vh" }}
        ></Typography>
      </Container>

      {/* Third Container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#FFF0E5", height: "65vh" }}
        ></Typography>
      </Container>

      {/* Fourth Container */}
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#F0F5EF", height: "65vh" }}
        ></Typography>
      </Container>
    </React.Fragment>
  );
}
