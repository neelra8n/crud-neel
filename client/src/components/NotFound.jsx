import logo from '../assets/img/404/notFound.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  image: {
    width: '100%',
    height: '100%',
  }
})

const NotFound = () => {
  const classes = useStyles();
  return (
      <>
        <img  className={classes.image} src={logo} alt="404" />
      </>
  );
}


export default NotFound;