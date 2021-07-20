import React from 'react';
import { Grid, Link, Typography, Button } from '@material-ui/core';
import { AiFillFacebook, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import ParticlesComponent from './ParticlesComponent';
import useStyles from './FooterStyles';

function Footer() {
  const classes = useStyles();

  return (
    <Grid container direction="row" alignItems="stretch">
      <Grid item xs={1} md={3}>
        <ParticlesComponent />
      </Grid>

      {/* First column */}
      <Grid item xs={3} md={2} className={classes.column}>
        <Typography variant="button">First Column</Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            First link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Second link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Third link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Fourth link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Fifth link
          </Link>
        </Typography>
      </Grid>

      {/* Second column */}
      <Grid item xs={3} md={2} className={classes.column}>
        <Typography variant="button">Second Column</Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            First link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Second link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Third link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Fourth link
          </Link>
        </Typography>

        <Typography>
          <Link href="#footer" component="button" variant="body2">
            Fifth link
          </Link>
        </Typography>
      </Grid>

      {/* Social media */}
      <Grid item xs={5} md={2} className={classes.column}>
        <Typography variant="button">Reach out to us!</Typography>

        <Grid item xl={2}>
          <Button href="#">
            <AiFillFacebook size={40} />
          </Button>

          <Button href="#">
            <AiFillYoutube size={40} />
          </Button>

          <Button href="#">
            <AiFillGithub size={40} />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
