import { FormControl, FormGroup, InputLabel, Input, Button, Typography } from "@mui/material";

import { makeStyles, } from "@mui/styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";


const useStyles = makeStyles({
    formGroup: {
        width: '800px',
        minWidth: '400px',
        overflow: 'hidden',
        margin: '60px auto',
        padding: '10px 60px',
        textAlign: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        '& > *': {
            '& > *': {
                margin: '10px 30px !important',
            }
        }
    },
    typography: {
        fontSize: '30px!important',
        fontWeight: 'bold!important',
        paddingTop: '30px'
    },
    button: {
        width: '150px',
        margin: '15px auto !important',
        padding: '10px 10px !important',
        alignSelf: 'center',
        fontSize: '14px!important'
    }
})

const initialObject = {
    name: "",
    username: "",
    email: "",
    phone: ""
}



const AddUsers = () => {
    const [user, setUser] = useState(initialObject);

    const classes = useStyles();

    const {name, username, email, phone } = user;

    const history = useNavigate();

    const onValueChane = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }


    const addUserDetails = async () => {
        await addUser(user);
        history('/all');
    }


    return(
        <>
            <div className={classes.formGroup}>
                <Typography className={classes.typography} >Add User</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input name="name" value={name} onChange={(e)=>onValueChane(e)} />
                    </FormControl>
                
                    <FormControl>
                        <InputLabel>Username</InputLabel>
                        <Input name="username" value={username} onChange={(e)=>onValueChane(e)}/>
                    </FormControl>

                    <FormControl>
                        <InputLabel>Phone</InputLabel>
                        <Input name="phone" value={phone} onChange={(e)=>onValueChane(e)} />
                    </FormControl>

                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input name="email" value={email} onChange={(e)=>onValueChane(e)} />
                    </FormControl>
                    <Button className={classes.button} variant="outlined" onClick={()=>addUserDetails()}>Add</Button>
                </FormGroup>
            </div>
        </>
    )
}


export default AddUsers;