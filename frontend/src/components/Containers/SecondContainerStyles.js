import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  second_container: {
    backgroundColor: "grey.300",
    height: "65ch",
  },
  display_shopping: {
    position: "relative",
    left: "30ch",
    top: "15ch",
    [theme.breakpoints.between("xs", "sm")]: {
      left: "2ch",
      top: "2ch",
    },
  },
  grid_typography: {
    position: "relative",
    left: "25ch",
    top: "15ch",
    color: "#2B3C2A",
    [theme.breakpoints.between("xs", "sm")]: {
      left: "1ch",
      top: "5ch",
      wordWrap: "none",
    },
  },
}));

export default useStyles;
