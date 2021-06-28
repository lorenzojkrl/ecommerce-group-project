import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#2F1160",
    letterSpacing: 1,
  },
  first_container: {
    backgroundColor: "#FFF0E5",
    height: "65vh",
    textAlign: "center",
  },
  box_in_first_container: {
    position: "absolute",
    top: "20vh",
    left: "15vw",
    lineHeight: 1,
    margin: 2,
    [theme.breakpoints.between("xs", "sm")]: {
      textAlign: "center",
      top: "14vh",
      right: "15vw",
    },
  },
  subtitle_1: {
    color: "#2F1160",
    letterSpacing: 1,
  },
  display_macbook: {
    position: "absolute",
    top: "22vh",
    left: "60vw",
    textAlign: "right",
    margin: 1,
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));

export default useStyles;
