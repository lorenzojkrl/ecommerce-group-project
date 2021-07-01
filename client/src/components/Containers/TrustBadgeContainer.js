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
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [active, setActive] = useState(0);

  const transitionSlide = (act, idx) =>
    act === idx
      ? { maxWidth: '100%', position: 'absolute' }
      : { position: 'absolute' };

  const changeActive = () => {
    if (!matches) return;
    const nextValue = active + 1 >= defaultTestimonials.length ? 0 : active + 1;
    setActive(nextValue);
    transitionSlide();
  };

  useEffect(() => {
    if (!matches) {
      setTestimonials(defaultTestimonials);
      return;
    }
    const timer = setTimeout(() => {
      const nextValue = active + 1 >= defaultTestimonials.length ? 0 : active + 1;
      setActive(nextValue);
    }, 4000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [matches, active]);

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
            direction={active === idx ? 'left' : 'right'}
            in={matches ? active === idx : true}
            mountOnEnter
            unmountOnExit
            style={matches ? transitionSlide(active, idx) : ''}
            timeout={matches ? { enter: 2500, exit: 2500 } : 0}
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
