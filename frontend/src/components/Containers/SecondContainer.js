import React from "react";
import { Container, Grid, Box, Typography, Button } from "@material-ui/core";
import useStyles from "./SecondContainerStyles";
import OnlineShopping from "../../assets/images/online-shopping-concept.svg";

function SecondContainer() {
  const classes = useStyles(useStyles);

  return (
    <Container
      className={classes.second_container}
      maxWidth={true}
      component="div"
    >
      <Grid container>
        <Grid item xs={12} sm={5}>
          <Box component="span" p={4} className={classes.display_shopping}>
            <img src={OnlineShopping} alt="macbook" width="300" />
          </Box>
        </Grid>

        <br />

        <Grid item xs={12} sm={5} className={classes.grid_typography}>
          <Typography variant="h3">Shop with ease</Typography>

          <br />

          <Typography variant="subtitle1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            blanditiis asperiores quisquam ab quidem accusantium deserunt ipsa
            earum nihil tempora?
          </Typography>

          <br />

          <Button variant="contained" color="primary">
            <Typography variant="button" display="block">
              Click me to shop now!
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SecondContainer;
