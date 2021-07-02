import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  useMediaQuery,
  Slide,
} from '@material-ui/core';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useTheme } from '@material-ui/core/styles';
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
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('xs'));
  const tablet = useMediaQuery(theme.breakpoints.down('sm'));

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
    if (!mobile) return;
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
    if (!mobile) return;
    const timer = setTimeout(() => {
      const nextValue = next + 1 >= defaultTestimonials.length ? 0 : next + 1;
      setActive({ next: nextValue, prev: next });
    }, 4000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [mobile, next]);

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
            in={mobile ? next === idx : true}
            style={mobile ? transitionSlide(idx) : ''}
            timeout={mobile ? { enter: 800, exit: 600 } : 0}
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
                <span>
                  <a
                    href={testimonial.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub color="black" size={tablet ? 20 : 35} />
                  </a>
                  <a
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin color="black" size={tablet ? 20 : 35} />
                  </a>
                </span>
              </Card>
            </Grid>
          </Slide>
        ))}
      </Grid>
    </Grid>
  );
};

export default TrustBadgeContainer;
