import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
