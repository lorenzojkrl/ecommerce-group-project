import React, { useEffect, useState } from 'react';
import { Slide, Grid, useMediaQuery } from '@material-ui/core';
import CarouselItem from './CarouselItem';

const Carousel = ({ testimonials = [] }) => {
  const mobile = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const tablet = useMediaQuery((theme) => theme.breakpoints.down('sm'));
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
      const nextValue = next + 1 >= testimonials.length ? 0 : next + 1;
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
      const nextValue = next + 1 >= testimonials.length ? 0 : next + 1;
      setActive({ next: nextValue, prev: next });
    }, 4000);
    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(timer);
    };
  }, [mobile, next, testimonials.length]);

  return (
    <>
      {testimonials.map((testimonial, idx) => (
        <Slide
          onClick={changeActive}
          direction={next === idx ? 'left' : 'right'}
          in={mobile ? next === idx : true}
          style={mobile ? transitionSlide(idx) : {}}
          timeout={mobile ? { enter: 800, exit: 600 } : 0}
          key={testimonial.name.replace(' ', '')}
        >
          <Grid item md={3} sm={6} xs={6}>
            <CarouselItem testimonial={testimonial} tablet={tablet} />
          </Grid>
        </Slide>
      ))}
    </>
  );
};

export default Carousel;
