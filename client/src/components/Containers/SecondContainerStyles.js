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
  display_shopping: {
    width: '60%',
    marginLeft: '10%',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 10em)',
    },
  },
}));

export default useStyles;
