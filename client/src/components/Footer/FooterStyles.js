import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  column: {
    position: 'relative',
    top: '15vh',
    textAlign: 'left',
    color: '#FDFAF6',
  },
  icon_container: {
    padding: theme.spacing(0),
    color: '#0A1931',
  },
}));

export default useStyles;
