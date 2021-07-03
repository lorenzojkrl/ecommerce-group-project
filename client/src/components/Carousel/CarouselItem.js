import { Card, CardMedia, Typography } from '@material-ui/core';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import useStyles from './CarouselStyles';

const CarouselItem = ({ testimonial = {}, tablet = false }) => {
  const classes = useStyles(useStyles);
  return (
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
        <a href={testimonial.github} target="_blank" rel="noopener noreferrer">
          <AiFillGithub color="black" size={tablet ? 20 : 35} />
        </a>
        <a href={testimonial.linkedin} target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin color="black" size={tablet ? 20 : 35} />
        </a>
      </span>
    </Card>
  );
};

export default CarouselItem;
