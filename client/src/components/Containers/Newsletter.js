import React from "react";
import { Typography, Container, TextField, Grid } from "@material-ui/core";
import useStyles from "./NewsletterStyle";
import Mailing from "../../assets/images/Mailing.svg";

function Newsletter() {
  const classes = useStyles(useStyles);

  return (
    <Container
      disableGutters={true}
      maxWidth={true}
      className={classes.fourth_container}
    >
      <Typography className={classes.root} variant="h2" gutterBottom>
        Newsletter
      </Typography>

      <Typography variant="h6" className={classes.subtitle_1}>
        Come join us, it's free!
      </Typography>

      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs>
          <Grid item xs={13} sm={6}>
            <img src={Mailing} alt="macbook" width="150" />
          </Grid>

          <form noValidate autoComplete="off">
            <TextField
              id="filled-secondary"
              label="email"
              variant="filled"
              color="secondary"
            />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Newsletter;
