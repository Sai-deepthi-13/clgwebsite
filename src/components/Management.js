import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Header from './header';
import Footer from './footer';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    overflow: 'hidden',
    padding: theme.spacing(5, 3),
  },
  paper: {
    maxWidth: 500,
    margin: `${theme.spacing(5)}px auto`,
    padding: theme.spacing(5.5),
    borderRadius: 10,
  },
  square: {
    padding: theme.spacing(7),
    borderRadius: 10,
  },
  divstyles:{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      marginTop:"30px"
  }
}));

//const message = `Name Designation `;

export default function Management() {
  const classes = useStyles();

  return (
      <>
      <Header/>
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <div className={classes.divstyles}>
                <h5>Name</h5>
                <p>Designation</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
            
          </Grid>
          <Grid item xs>
          <div className={classes.divstyles}>
                <h5>Name</h5>
                <p>Designation</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
          <div className={classes.divstyles}>
                <h5>Name</h5>
                <p>Designation</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
          <div className={classes.divstyles}>
                <h5>Name</h5>
                <p>Designation</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
          <div className={classes.divstyles}>
                <h5>Name</h5>
                <p>Designation</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}elevation={6}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Avatar variant="square" className={classes.square}>C
            </Avatar>
          </Grid>
          <Grid item xs>
          <div className={classes.divstyles}>
                <h5>Name</h5>
                <p>Designation</p>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
    <Footer/>
    </>
  );
}
