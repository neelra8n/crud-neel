import {Box, Button, Typography} from '@mui/material';
import profile_pic from '../assets/img/profile_pic.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {withStyles} from '@mui/styles'

const useStyles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '60%',
        margin: '20px 30% 10px 20% ',
        padding: '20px 10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        '& > *':{
            margin: '20px'
        }
    },
    image: {
        width: '18rem',
        display: 'block',
        overflow: 'hidden',
        minWidth: '200px'
    },
    button: {
        margin: '20px 20px 10px 0!important',
        '& > *' : {
            textDecoration: 'none!important',
            width: '160px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '16px',
        },
    },
    imageIcon: {
        margin: '20px',
        
        
    },
    imageBox: {
        // border: '2px solid rgba(0,0,0,0.4)',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    },
    typography:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center!',
        alignItems: 'center',
        margin: '0 30%',
        fontSize: '14px',
        '& > *':{
            
        }
    }

}

function Crud(props){
        const {classes} = props;
    return (
        <>
            <Box className={classes.container}>
                <Box className={classes.imageBox}>
                    <img src={profile_pic} alt='dp' className={classes.image} /><br />
                    <GitHubIcon className={classes.imageIcon} />
                    <LinkedInIcon className={classes.imageIcon} />
                </Box>
                <h2>Hi I'm Neel Ratn (Full Stack Developer)</h2>
                <Box className={classes.typography}>
                   <Typography>I like to build websites from scratch and can help from production to deployment of your website.</Typography>
                   <Typography>NodeJs, React, MongoDb, Express,  are my gears. And Don't forget Javascript is my Armour</Typography>
                   <br />
                   <Typography>I do also have Java in my arsenal, fully equipped with Data Structure I'm always ready to face challenges thrown at me.</Typography>
                   <br />
                   <Typography>This small webapp is a CRUD(Create Read Update and Delete), but I warn you don't take it easy, This app is build on MERN stack implementing RESTful architechute,
                       UI designed with Material Ui </Typography>
                    <br />
                    <Typography>You can check my Resume by clicking on this button</Typography>

                   
                   
                </Box>
                <Button variant="contained" className={classes.button}><a href="https://drive.google.com/file/d/1vjHwQG6KedntjnrSzLDYOgIP_QfeZXZ-/view?usp=sharing" target="_blank" rel='noreferrer' >Resume</a></Button>
                
            </Box>
        </>
    )
}

export default withStyles(useStyles)(Crud);