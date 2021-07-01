import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import useStyles from './SecondContainerStyles';
import OnlineShopping from '../../assets/images/online-shopping-concept.svg';

function SecondContainer() {
  const classes = useStyles(useStyles);

  return (
    <Grid
      container
      className={classes.second_container}
      alignItems="center"
      justify="center"
      direction="row"
    >
      <Grid item xs={12} sm={5}>
        <img src={OnlineShopping} alt="macbook" width="300" height="auto" />
      </Grid>

      <br />

      <Grid item xs={12} sm={5}>
        <Typography variant="h3">Shop with ease</Typography>

        <br />

        <Typography variant="subtitle1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          blanditiis asperiores quisquam ab quidem accusantium deserunt ipsa earum
          nihil tempora?
        </Typography>

        <br />

        <Button variant="contained" color="primary">
          <Typography variant="button" display="block">
            Click me to shop now!
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default SecondContainer;
