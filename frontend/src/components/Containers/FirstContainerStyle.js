import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: 700,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    color: "#2F1160",
    letterSpacing: 2,
  },
  first_container: {
    backgroundColor: "#FFF0E5",
    height: "65ch",
    textAlign: "center",
  },
  box_in_first_container: {
    position: "absolute",
    top: 160,
    left: "13%",
    lineHeight: 1,
    margin: 2,
  },
  subtitle_1: {
    color: "#2F1160",
    letterSpacing: 1,
  },
  display_macbook: {
    position: "absolute",
    top: 170,
    left: "60%",
    textAlign: "right",
    margin: 1,
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
}));

export default useStyles;
