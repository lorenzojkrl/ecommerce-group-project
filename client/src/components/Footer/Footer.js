import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Link, Typography } from '@material-ui/core';
import { AiFillFacebook, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import ParticlesComponent from './ParticlesComponent';
import useStyles from './FooterStyles';

function Footer() {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="stretch"
    >
      <Grid item xs={1} md={3}>
        <ParticlesComponent />
      </Grid>

      {/* First column */}
      <Grid item xs={3} md={2} className={classes.column}>
        <Typography variant="button">First Column</Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            First link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Second link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Third link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Fourth link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Fifth link
          </Link>
        </Typography>
      </Grid>

      {/* Second column */}
      <Grid item xs={3} md={2} className={classes.column}>
        <Typography variant="button" gutterBottom>
          Second Column
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            First link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Second link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Third link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Fourth link
          </Link>
        </Typography>

        <Typography gutterBottom>
          <Link href="#footer" component="button" variant="body2">
            Fifth link
          </Link>
        </Typography>
      </Grid>

      {/* Social media */}
      <Grid item xs={5} md={2} className={classes.column}>
        <Typography variant="button" gutterBottom>
          Reach out to us!
        </Typography>

        <Container className={classes.icon_container}>
          <AiFillFacebook size={42} />
          <AiFillYoutube size={42} />
          <AiFillGithub size={42} />
        </Container>
      </Grid>
    </Grid>
  );
}

export default Footer;
