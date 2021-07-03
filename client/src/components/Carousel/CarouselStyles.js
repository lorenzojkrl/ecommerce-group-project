import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: 'none',
    backgroundColor: 'inherit',
    overflow: 'hidden',
    display: 'inline-flex',
    flexFlow: 'column',
    alignItems: 'center',
    // transition: 'transform 300ms ease-in-out',
    // '&:hover': {
    //   transform: 'scale3d(1.1, 1.1, 1)',
    // },
  },
  cardGrid: {
    // overflowX: 'hidden',
  },
  media: {
    height: 102,
    width: 102,
    borderRadius: '50%',
    [theme.breakpoints.up('lg')]: {
      height: 125,
      width: 125,
    },
  },
  iconbutton: {
    opacity: 0.75,
    color: theme.palette.text.primary,
    transition: 'transform 300ms ease-in-out',
    '&:hover': {
      transform: 'scale3d(1.1, 1.1, 1)',
      opacity: 0.85,
      color: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
