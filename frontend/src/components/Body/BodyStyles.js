import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontStyle: "bold",
    fontWeight: 700,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    color: "#2F1160",
    letterSpacing: 2,
  },
  subtitle1: {
    color: "#2F1160",
    letterSpacing: 1,
  },
  display_macbook: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 600,
    maxWidth: "100%",
  },
}));

export { useStyles };
