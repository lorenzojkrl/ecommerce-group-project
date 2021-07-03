import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Carousel from 'components/Carousel/Carousel';
import useStyles from './TrustBadgeContainerStyles';

const defaultTestimonials = [
  {
    name: 'Craig Norford',
    src: 'https://avatars.githubusercontent.com/u/73719327?v=4',
    github: 'https://github.com/craig1001',
    linkedin: 'https://www.linkedin.com/in/craig-norford-9a33838a/',
  },
  {
    name: 'Eugene Gohh',
    src: 'https://avatars.githubusercontent.com/u/64187129?v=4',
    github: 'https://github.com/EugeneGohh',
    linkedin: 'https://www.linkedin.com/in/eugenegohh/',
  },
  {
    name: 'Torey Littlefield',
    src: 'https://avatars.githubusercontent.com/u/52614742?v=4',
    github: 'https://github.com/ToreyLittlefield',
    linkedin: 'https://www.linkedin.com/in/torey-littlefield/',
  },
  {
    name: 'Lorenzo Zarantonello',
    src: 'https://avatars.githubusercontent.com/u/18583152?v=4',
    github: 'https://github.com/lorenzojkrl',
    linkedin: 'https://www.linkedin.com/in/lorenzo-zarantonello/',
  },
];

const TrustBadgeContainer = () => {
  const classes = useStyles(useStyles);
  const testimonials = defaultTestimonials;

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        item
        xs={12}
      >
        <Typography variant="h2" align="center" color="primary">
          Trusted By
        </Typography>
      </Grid>
      <Grid
        classes={{ root: classes.cardGrid }}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        item
        xs={12}
        spacing={3}
      >
        {/* Custom Carousel Component for Testimonials Object */}
        <Carousel testimonials={testimonials} />
      </Grid>
    </Grid>
  );
};

export default TrustBadgeContainer;
