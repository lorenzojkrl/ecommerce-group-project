import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  second_container: {
    backgroundColor: 'grey.300',
    height: '65vh',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      height: 'min(100vh, 700px)',
    },
  },
}));

export default useStyles;
