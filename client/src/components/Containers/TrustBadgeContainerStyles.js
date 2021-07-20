import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF0E5',
    height: 'min(70vh, 500px)',
    [theme.breakpoints.down('sm')]: {
      height: 'min(80vh, 500px)',
      padding: 20,
    },
    [theme.breakpoints.down('xs')]: {
      height: 'min(80vh, 350px)',
      padding: 20,
    },
    textAlign: 'center',
  },
}));

export default useStyles;
