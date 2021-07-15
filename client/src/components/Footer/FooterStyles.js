import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  column: {
    position: 'relative',
    top: '15vh',
    textAlign: 'left',
    color: '#FDFAF6',
    [theme.breakpoints.between('sm', 'md')]: {
      top: '3vh',
    },
  },
}));

export default useStyles;
