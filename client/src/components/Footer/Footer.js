import React from "react";
import Container from "@material-ui/core/Container";
import ParticlesComponent from "./ParticlesComponent";
import useStyles from "./FooterStyles";
import { Grid, Link, Typography } from "@material-ui/core";
import { AiFillFacebook, AiFillGithub, AiFillYoutube } from "react-icons/ai";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container disableGutters={true} maxWidth={true}>
        <Grid container spacing={0}>
          <ParticlesComponent />

          <Grid item xs={2} className={classes.extra_grid_space}>
            {/* Spacing here */}
          </Grid>

          {/* First column */}
          <Grid item xs={2}>
            <Container className={classes.column}>
              <Typography variant="button" display="block" gutterBottom>
                First Column
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  First link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Second link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Third link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Fourth link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Fifth link
                </Link>
              </Typography>
            </Container>
          </Grid>

          {/* Second column */}
          <Grid item xs={2}>
            <Container className={classes.column}>
              <Typography variant="button" display="block" gutterBottom>
                Second Column
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  First link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Second link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Third link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Fourth link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Fifth link
                </Link>
              </Typography>
            </Container>
          </Grid>

          {/* Third column */}
          <Grid item xs={2}>
            <Container className={classes.column}>
              <Typography variant="button" display="block" gutterBottom>
                Third Column
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  First link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Second link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Third link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Fourth link
                </Link>
              </Typography>

              <Typography display="block" gutterBottom>
                <Link component="button" variant="body2">
                  Fifth link
                </Link>
              </Typography>
            </Container>
          </Grid>

          {/* Social media */}
          <Grid item xs>
            <Container className={classes.column}>
              <Typography variant="button" display="block" gutterBottom>
                Reach out to us!
              </Typography>

              <Grid item xs={6}>
                <Container className={classes.icon_container}>
                  <AiFillFacebook size={42} />
                  <AiFillYoutube size={42} />
                  <AiFillGithub size={42} />
                </Container>
              </Grid>
            </Container>
          </Grid>

          <Grid item xs={2} className={classes.extra_grid_space}>
            {/* Spacing here */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
