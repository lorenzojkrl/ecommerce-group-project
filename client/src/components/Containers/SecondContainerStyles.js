import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  second_container: {
    backgroundColor: 'grey.300',
    height: '65vh',
    [theme.breakpoints.between('xs', 'sm')]: {
      textAlign: 'center',
      height: 'min(75vh, 500px)',
    },
  },
}));

export default useStyles;
