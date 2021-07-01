import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  second_container: {
    backgroundColor: 'grey.300',
    height: 'min(65vh, 400px)',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      height: 'min(100vh, 650px)',
    },
  },
}));

export default useStyles;
