import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  first_container: {
    backgroundColor: "#FFF0E5",
    // height: "75vh",
    textAlign: "center",
    // [theme.breakpoints.down("sm")]: {
    //   height: "100%",
    //   paddingTop: "10vh",
    //   paddingBottom: "10vh"
    // },
  },
  display_macbook: {
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      // display: "none",
      width: "calc(100% - 5em)"
    },
  },
}));

export default useStyles;
