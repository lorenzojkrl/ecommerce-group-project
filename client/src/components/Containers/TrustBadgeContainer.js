import {Grid, Typography , Card, CardMedia, Container} from "@material-ui/core";
import { useStyles } from './TrustBadgeContainerStyles'

const TrustBadgeContainer = () => {
    const classes = useStyles(useStyles);
    return (
        // <Container disableGutters={true} maxWidth="xl" >
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
                    item xs={12}
                >
                    <Typography
                        variant="h2"
                        align="center"
                        color="primary"
                    >
                    Trusted By
                    </Typography>
                </Grid>
                <Grid
                    classes={{root: classes.cardGrid}}
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    item xs={12}
                    spacing={3}
                    wrap="nowrap"
                >
                    <Grid item sm={3} xs={12}>
                        <Card classes={{root: classes.card}}>
                            <CardMedia
                                className={classes.media}
                                image="https://avatars.githubusercontent.com/u/73719327?v=4"
                                title="Craig Norford"
                                />
                            <Typography
                                variant="h6"
                                align="center"
                                >
                            Craig Norford
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Card classes={{root: classes.card}}>
                            <CardMedia
                                className={classes.media}
                                title="Eugene Gohh"
                                image="https://avatars.githubusercontent.com/u/64187129?v=4"
                                />
                            <Typography
                                variant="h6"
                                align="center"
                            >
                            Eugene Gohh
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Card  classes={{root: classes.card}}>
                            <CardMedia
                                className={classes.media}
                                title="Torey Littlefield"
                                image="https://avatars.githubusercontent.com/u/52614742?v=4"
                                />
                           <Typography
                                variant="h6"
                                align="center"
                                >
                            Torey Littlefield
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Card classes={{root: classes.card}}>
                            <CardMedia
                                className={classes.media}
                                title="Lorenzo Zarantonello"
                                image="https://avatars.githubusercontent.com/u/18583152?v=4"
                                />
                           <Typography
                                variant="h6"
                                align="center"
                                >
                            Lorenzo Zarantonello
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        // </Container>
    )
};

export { TrustBadgeContainer }