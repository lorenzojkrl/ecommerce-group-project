import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontStyle: "bold",
    fontWeight: 400,
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export { useStyles };
