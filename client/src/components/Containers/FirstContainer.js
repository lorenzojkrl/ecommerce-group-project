import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './FirstContainerStyles';
import MacBook from '../../assets/images/MacBook.svg';

function FirstContainer() {
  const classes = useStyles(useStyles);

  return (
    <Grid
      className={classes.first_container}
      container
      alignItems="center"
      direction="row"
    >
      <Grid item xs={12} sm={7}>
        <Typography color="primary" variant="h2">
          We innovate your <br /> online shopping <br /> experience
        </Typography>
        <br />
        <Typography color="primary" variant="subtitle1">
          What do you wanna shop today? <br /> What do you need? Just tell us.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={4}>
        <img
          className={classes.display_macbook}
          height="auto"
          src={MacBook}
          alt="macbook"
        />
        {/* width="390vw" */}
      </Grid>
    </Grid>
  );
}

export default FirstContainer;
