import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import useStyles from "./FirstContainerStyles";
import MacBook from "../../assets/images/MacBook.svg";

function FirstContainer() {
  const classes = useStyles(useStyles);

  return (
    <Container
      className={classes.first_container}
      maxWidth={true}
      component="div"
    >
      <Grid container justify="center" alignItems="stretch" direction="column">
        <Box className={classes.box_in_first_container}>
          <Typography className={classes.root} variant="h2">
            We innovate your <br /> online shopping <br /> experience
          </Typography>
          <br />
          <Typography className={classes.subtitle_1} variant="subtitle1">
            What do you wanna shop today? <br /> What do you need? Just tell us.
          </Typography>
        </Box>

        <Box className={classes.display_macbook}>
          <img src={MacBook} alt="macbook" width="390vw" />
        </Box>
      </Grid>
    </Container>
  );
}

export default FirstContainer;
