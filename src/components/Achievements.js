import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Depnav from './depnav';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: 'hidden',
    padding: theme.spacing(0, 5),
  },
  paper: {
   width:"50%",
    height:"230px",
    margin: `${theme.spacing(5)}px auto`,
    borderRadius: 7,
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',
    display:"flex",
    flexDirection:"column",
    justifyContent:"center"
    
  },
  Box:{
    color:"rgb(209, 57, 46)",
    display:"flex",
    flexDirection:"column",
    margin:"5px",
    padding:"5px"
  },
  p:{
    color: "rgb(136,136,136)",

  }
}));


export default function Achievements() {
  const classes = useStyles();

  return (
      <>
        <img src={process.env.PUBLIC_URL+"/images/cse.jpg"} width="100%" height="250px" alt="computer science and engineering"/>
        <Depnav/>
    <div className={classes.root}>
       <h1 style={{
           textAlign:"center",
           margin:"auto",
           padding:"50px"
       }}>Acievements</h1>
      
      <Paper  className={classes.paper} elevation={9}>
        
            <div className={classes.Box}>
            <h3 ><b>Event/Competition</b></h3><br/>
            <p className={classes.p}>
            Date/Location </p>
            <h5 style={{color:"black"}}>Participants outcome in Event</h5>
            </div>
        
      </Paper>

      <Paper  className={classes.paper} elevation={9}>
        
            <div className={classes.Box}>
            <h3 ><b>Event/Competition</b></h3><br/>
            <p className={classes.p}>
            Date/Location </p>
            <h5 style={{color:"black"}}>Participants outcome in Event</h5>
            </div>
        
      </Paper>
           
      <Paper  className={classes.paper} elevation={9}>
        
            <div className={classes.Box}>
            <h3 ><b>Event/Competition</b></h3><br/>
            <p className={classes.p}>
            Date/Location </p>
            <h5 style={{color:"black"}}>Participants outcome in Event</h5>
            </div>
        
      </Paper>
    </div>
    </>
  );
}