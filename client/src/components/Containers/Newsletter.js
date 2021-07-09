import React from 'react';
import { Typography, TextField, Grid } from '@material-ui/core';
import useStyles from './NewsletterStyles';
import Mailing from '../../assets/images/Mailing.svg';

function Newsletter() {
  const classes = useStyles(useStyles);

  return (
    <Grid container className={classes.fourth_container}>
      <Grid container direction="column" alignItems="center" justify="center">
        <Typography variant="h2" gutterBottom>
          Newsletter
        </Typography>

        <Typography variant="h6">Come join us, it&apos;s free!</Typography>

        <img src={Mailing} alt="macbook" width="180" />

        <form noValidate autoComplete="off">
          <TextField
            id="filled-secondary"
            label="Your Email"
            placeholder="Enter your email here"
            variant="filled"
            color="secondary"
          />
        </form>
      </Grid>
    </Grid>
  );
}

export default Newsletter;
