import React  from 'react';
import { makeStyles } from '@material-ui/styles';
import './header.css';
import Box from '@material-ui/core/Box';
import Depnav from './depnav';


const useStyles = makeStyles(()=>({
    appbarstyles:{
        backgroundColor:"rgb(209, 57, 46)",
        width:"1200px",
        margin:"auto"
    },
    boxstyles:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:"100px"
    },
    innerboxstyles:{
        display:"flex",
        flexDirection:"column",
        width:"50%"
    },
    outerbox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around"
    },
    deanstyles:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    second:{
        display:"flex",
        flexDirection:"row",
        
    }
    
}));

const DepartmentOverview =  ()=> {
    const classes = useStyles();
        return ( 
            <>
        <img src={process.env.PUBLIC_URL+"/images/cse.jpg"} width="100%" height="250px" alt="computer science and engineering"/>
          <Depnav/>
          <Box className={classes.outerbox}>
        <Box className={classes.boxstyles}>
        <Box className={classes.innerboxstyles}>
                <h3>Vision</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply
                     random text. It has roots in a piece of classical Latin literature from 45 BC, making 
                     it over 2000 years old.
                </p>
                <br />
                
                <h3>Mission</h3>
                <p>
                Contrary to popular belief, Lorem Ipsum is not simply
                     random text. It has roots in a piece of classical Latin literature from 45 BC, making 
                     it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                    in Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered the
                      undoubtable source. Lorem Ipsum comes from sections  1.10.32 and 1.10.33 of "de Finibus 
                </p>
            </Box>

        <Box className={classes.deanstyles}>
            <img src={process.env.PUBLIC_URL+"/images/hod.jpg"}  width="200px" height="200px" style={{borderRadius:"50%",alignSelf:"center"}}/>
            <h4 style={{textAlign:"center"}}>Dr.Siddaraju</h4>
            <Box>
            <p style={{textAlign:"center"}}>Dean of Academics</p>
            <p style={{textAlign:"center",paddingTop:"0px"}}>Proffessor and Head,Department of Computer Science</p>
            </Box>          
        </Box>        
</Box>

<Box className={classes.second}  >
            <Box className={classes.innerboxstyles} style={{width:"50%",margin:"10%"}}> 
                <h3>About Department</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply
                     random text. It has roots in a piece of classical Latin literature from 45 BC, making 
                     it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                    in Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered the
                      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 in Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered thein Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered theof "de Finibus 
                </p>
            </Box>
            <Box className={classes.innerboxstyles} style={{width:"50%",margin:"10%"}}> 
                <h3>Department Profile</h3>
                <p>Contrary to popular belief, Lorem Ipsum is not simply
                     random text. It has roots in a piece of classical Latin in Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered thein Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered theliterature from 45 BC, making 
                     it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
                      in Virginia, looked up one oe more obscure Latin words, consectetur, from a Lorem Ipsum
                     passage, and going through the cites of the word in classical literature, discovered the
                      undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus 
                </p>
            </Box>
        </Box>
</Box>
     </>
         );
    } 
export default DepartmentOverview;

