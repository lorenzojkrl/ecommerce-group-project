import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './SecondContainerStyles';
import OnlineShopping from '../../assets/images/online-shopping-concept.svg';

function SecondContainer() {
  const classes = useStyles(useStyles);

  return (
    <Grid
      className={classes.second_container}
      container
      alignItems="center"
      direction="row"
    >
      {/* @EugeneGohh needs a class with some custom css to keep the image looking good when screen size changes */}
      <Grid item xs={12} sm={6}>
        <img
          src={OnlineShopping}
          height="auto"
          className={classes.display_shopping}
          alt="online-shopping"
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h3">Shop with ease</Typography>

        <br />

        <Typography variant="subtitle1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          blanditiis asperiores quisquam ab quidem accusantium deserunt ipsa earum
          nihil tempora?
        </Typography>

        <br />

        <Button variant="contained" color="primary">
          Click me to shop now!
        </Button>
      </Grid>
    </Grid>
  );
}

export default SecondContainer;
