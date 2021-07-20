import { Card, CardMedia, Typography, IconButton } from '@material-ui/core';
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
        <IconButton
          className={classes.iconbutton}
          size="small"
          href={testimonial.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={tablet ? 25 : 30} />
        </IconButton>
        <IconButton
          className={classes.iconbutton}
          size="small"
          href={testimonial.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={tablet ? 25 : 30} />
        </IconButton>
      </span>
    </Card>
  );
};

export default CarouselItem;
