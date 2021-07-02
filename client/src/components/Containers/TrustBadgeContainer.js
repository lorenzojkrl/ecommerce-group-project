import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  useMediaQuery,
  Slide,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './TrustBadgeContainerStyles';

const defaultTestimonials = [
  {
    name: 'Craig Norford',
    src: 'https://avatars.githubusercontent.com/u/73719327?v=4',
  },
  {
    name: 'Eugene Gohh',
    src: 'https://avatars.githubusercontent.com/u/64187129?v=4',
  },
  {
    name: 'Torey Littlefield',
    src: 'https://avatars.githubusercontent.com/u/52614742?v=4',
  },
  {
    name: 'Lorenzo Zarantonello',
    src: 'https://avatars.githubusercontent.com/u/18583152?v=4',
  },
];

const TrustBadgeContainer = () => {
  const classes = useStyles(useStyles);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  // const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const testimonials = defaultTestimonials;
  const [active, setActive] = useState({
    next: 0,
    prev: testimonials.length - 1,
  });
  const { next, prev } = active;

  const transitionSlide = (idx) => {
    if (next === idx) {
      return { position: 'absolute', transitionTimingFunction: 'linear' };
    }
    if (prev === idx) {
      return {
        position: 'absolute',
        transitionTimingFunction: 'linear',
      };
    }
    return { visibility: 'hidden' };
  };

  const changeActive = () => {
    if (!matches) return;
    const timer = setTimeout(() => {
      const nextValue = next + 1 >= defaultTestimonials.length ? 0 : next + 1;
      setActive({ next: nextValue, prev: next });
    }, 300);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  };

  useEffect(() => {
    if (!matches) return;
    const timer = setTimeout(() => {
      const nextValue = next + 1 >= defaultTestimonials.length ? 0 : next + 1;
      setActive({ next: nextValue, prev: next });
    }, 4000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [matches, next]);

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
        {/* Map Over Grid Item & Testimonials */}
        {testimonials.map((testimonial, idx) => (
          <Slide
            direction={next === idx ? 'left' : 'right'}
            in={matches ? next === idx : true}
            style={matches ? transitionSlide(idx) : ''}
            timeout={matches ? { enter: 800, exit: 600 } : 0}
          >
            <Grid
              onClick={changeActive}
              key={testimonial.name.replace(' ', '')}
              item
              md={3}
              sm={6}
              xs={12}
            >
              <Card classes={{ root: classes.card }}>
                <CardMedia
                  className={classes.media}
                  image={testimonial.src}
                  title={testimonial.name}
                />
                <Typography variant="h6" align="center">
                  {testimonial.name}
                </Typography>
              </Card>
            </Grid>
          </Slide>
        ))}
      </Grid>
    </Grid>
  );
};

export default TrustBadgeContainer;
