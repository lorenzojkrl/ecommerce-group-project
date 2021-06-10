import {Grid, Typography , Card, CardMedia, Container} from "@material-ui/core";

const TrustBadgeContainer = ({classes}) => {
    return (
        <Container disableGutters={true} maxWidth="xl">
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                style={{ backgroundColor: "#FFF0E5", height: "80vh" }}
                >
                <Grid item xs={12}>
                    <Typography
                        variant="h2"
                        align="center"
                        >
                            Trusted By 
                        </Typography>
                </Grid>
                <Grid  item xs={3}>
                    <Card >
                        <CardMedia
                            style={{height: 102, width: 102, borderRadius: "50%"}}
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
                <Grid item xs={3}>
                    <Card>
                        <CardMedia
                            style={{height: 102, width: 102, borderRadius: "50%"}}
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
                <Grid item xs={3}>
                    <Card>
                        <CardMedia
                            style={{height: 102, width: 102, borderRadius: "50%"}}
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
                <Grid item xs={3}>
                    <Card>
                        <CardMedia
                            style={{height: 102, width: 102, borderRadius: "50%"}}
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
        </Container>
    )
};

export { TrustBadgeContainer }