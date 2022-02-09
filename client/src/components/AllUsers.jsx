import { deleteUser, getUsers } from "../service/api";
import {useEffect, useState} from "react";

import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";


const useStyles = makeStyles({
    table:{
        width: '80%',
        margin: '20px auto',
    },
    tableCell: {
        '& > *': {
            background: 'black',
            color: 'white!important',
            fontWeight: '700!important'
        }
    },
    tableRow: {
        '& > *':{
            '& > *':{
                
            }
        }
    },
    button1: {
        background: 'black!important',
        color: 'white!important',
        marginRight: '20px!important',
        width: '90px!important'
    },
    button2: {
        background: 'red!important',
        color: 'white!important',
    }
})



const AllUsers = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getAllUsers();
    },[]);

    const getAllUsers = async ()=>{
        const response = await getUsers();

            setUsers(response.data)
    };

    const deleteUserDetails = async(id) => {
        await deleteUser(id);
        getAllUsers();
    }

    console.log(users);
    return (
        <>
            <div className={classes.table}>
                <Table>
                    <TableHead >
                        <TableRow className={classes.tableCell}>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>UserName</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={classes.tableRow}>
                        {
                           users.map( user => (
                                <TableRow key={user.id}>
                                    <TableCell >{user._id}</TableCell>
                                    <TableCell >{user.name}</TableCell>
                                    <TableCell >{user.username}</TableCell>
                                    <TableCell >{user.email}</TableCell>
                                    <TableCell >{user.phone}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" className={classes.button1} to={`/edit/${user._id}`} component={Link}
                                        >Edit</Button>
                                        <Button variant="contained" className={classes.button2}
                                        onClick={()=>deleteUserDetails(user._id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </div>
        </>
    )
}

export default AllUsers;