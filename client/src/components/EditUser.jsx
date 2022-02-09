import { FormControl, FormGroup, InputLabel, Input, Button, Typography } from "@mui/material";

import { makeStyles, } from "@mui/styles";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getUsersById } from "../service/api";


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



const EditUser = () => {
    const [user, setUser] = useState(initialObject);

    const classes = useStyles();

    const {name, username, email, phone } = user;

    const onValueChane = (e) => {
        setUser({...user, [e.target.name]:e.target.value});
    }

    const {id} = useParams();
    
    useEffect(()=>{
        const loadUserData = async () =>{
            const response = await getUsersById(id);
            setUser(response.data);
        }
         loadUserData();
    },[id])

    const history = useNavigate();
  

   

    const editUserDetails = async () => {
        await editUser(id,user);
        setUser(initialObject);
        history('/all');
    }


    return(
        <>
            <div className={classes.formGroup}>
                <Typography className={classes.typography} >Edit User</Typography>
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
                    <Button className={classes.button} onClick={()=>editUserDetails()} variant="outlined">Save</Button>
                </FormGroup>
            </div>
        </>
    )
}


export default EditUser;