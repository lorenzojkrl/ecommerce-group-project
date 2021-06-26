import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Footer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters={true} maxWidth="xl">
        <Typography
          component="div"
          style={{ backgroundColor: "#8C30F5", height: "65vh" }}
        ></Typography>
      </Container>
    </React.Fragment>
  );
}
