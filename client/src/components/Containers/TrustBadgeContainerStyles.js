import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFF0E5',
    height: 'min(70vh, 600px)',
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
  card: {
    boxShadow: 'none',
    backgroundColor: 'inherit',
    overflow: 'hidden',
    display: 'inline-flex',
    flexFlow: 'column',
    alignItems: 'center',
  },
  cardGrid: {
    // overflowX: 'hidden',
  },
  media: {
    height: 102,
    width: 102,
    borderRadius: '50%',
  },
}));

export default useStyles;
