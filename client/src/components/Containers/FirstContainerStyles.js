import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  first_container: {
    backgroundColor: '#FFF0E5',
    height: 'min(75vh, 1080px)',
    textAlign: 'center',
    [theme.breakpoints.between('xs', 'md')]: {
      height: 'min(75vh, 500px)',
    },
  },
  display_macbook: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: 'calc(100% - 5em)',
    },
  },
}));

export default useStyles;
