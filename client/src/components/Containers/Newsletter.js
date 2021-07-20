import React from 'react';
import { Typography, TextField, Grid } from '@material-ui/core';
import useStyles from './NewsletterStyles';
import Mailing from '../../assets/images/Mailing.svg';

function Newsletter() {
  const classes = useStyles(useStyles);

  return (
    <Grid
      className={classes.fourth_container}
      container
      alignItems="center"
      direction="row"
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="h2" gutterBottom>
          Newsletter
        </Typography>

        <Typography variant="h6">Come join us, it&apos;s free!</Typography>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img src={Mailing} alt="macbook" height="auto" />

        <form noValidate autoComplete="off">
          <TextField
            id="filled-secondary"
            label="Your Email"
            variant="filled"
            color="secondary"
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default Newsletter;
