import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  column: {
    position: "relative",
    top: "15vh",
    textAlign: "left",
    color: "#FDFAF6",
    [theme.breakpoints.between("xs", "sm")]: {
       paddingTop: 0,
       paddingLeft: "10vw",
       paddingRight: 0,
    }
  },
  extra_grid_space: {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
  icon_container: {
    padding: theme.spacing(0),
    color: "#0A1931",
  },
}));

export default useStyles;
