import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
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
    left: "15%",
    lineHeight: 1,
    margin: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
      top: 155,
      right: "15vw",
    },
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
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
