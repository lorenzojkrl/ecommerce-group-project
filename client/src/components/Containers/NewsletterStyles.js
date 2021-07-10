import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fourth_container: {
    color: '#2F1160',
    textAlign: 'center',
    backgroundColor: '#F0F5EF',
    height: 'min(75vh, 500px)',
    [theme.breakpoints.down('sm')]: {
      height: 'min(85vh, 500px)',
    },
  },
}));

export default useStyles;
