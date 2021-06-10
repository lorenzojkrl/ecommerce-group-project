import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#FFF0E5",
        // height: "80vh"
        height: 500
    },
    card: {
        // backgroundColor: "#FFF0E5",
        backgroundColor: "inherit"
    },
    media: {
        height: 102,
        width: 102,
        borderRadius: "50%"
    }
}));

export { useStyles }