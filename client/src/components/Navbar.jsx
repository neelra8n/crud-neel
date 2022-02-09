

import {AppBar, Toolbar} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
    navlink: {
        padding: '10px',
        color: '#fff',
        textDecoration: 'none'
    },
    header: {
        background: 'black!important',
        minWidth: '400px'
    }
});


const Navbar = () => {
    const classes = useStyles();
  return (
        <>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                        <NavLink to='/' className={classes.navlink}>CRUD</NavLink>
                        <NavLink to='/add' className={classes.navlink}>Add User</NavLink>
                        <NavLink to='/all' className={classes.navlink}>All Users</NavLink>
                </Toolbar>
            </AppBar>
        </>
  );
}



export default Navbar;