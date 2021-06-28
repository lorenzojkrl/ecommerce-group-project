import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  second_container: {
    backgroundColor: "grey.300",
    height: "65vh",
    [theme.breakpoints.between("xs", "sm")]: {
      height: "85vh",
    },
  },
  display_shopping: {
    position: "relative",
    left: "15vw",
    top: "15vh",
    [theme.breakpoints.between("xs", "sm")]: {
      left: "1vw",
      top: "2vh",
    },
  },
  grid_typography: {
    position: "relative",
    left: "15vw",
    top: "15vh",
    color: "#2B3C2A",
    [theme.breakpoints.between("xs", "sm")]: {
      left: "1vw",
      top: "5vh",
    },
  },
}));

export default useStyles;
