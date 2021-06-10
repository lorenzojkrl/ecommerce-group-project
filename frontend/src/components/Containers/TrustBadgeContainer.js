import {Avatar, Container, Typography} from "@material-ui/core";

const TrustBadgeContainer = ({classes}) => {
    return (
        <Container disableGutters={true} maxWidth="xl">
          <Typography
            component="div"
            style={{ backgroundColor: "#FFF0E5", height: "80vh" }}
            variant="h3"
            >
            Trusted By
            <Avatar alt="Remy Sharp" src="/broken-image.jpg">
              B
            </Avatar>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
              />
            <Avatar src="/broken-image.jpg" />
          </Typography>
        </Container>
    )
};

export { TrustBadgeContainer }