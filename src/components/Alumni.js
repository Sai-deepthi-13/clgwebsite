import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Depnav from './depnav';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PlayForWorkIcon from '@material-ui/icons/PlayForWork';




const useStyles = makeStyles({
  table: {
    width: "50%",
    margin:"auto",
    marginTop:"100px",
    marginBottom:"100px",
    backgroundColor:'rgb(209,57,46)',
    border:"none"
  },
  th:{
      backgroundColor:'#2e2970',   
      border:"none",
      width:"500px"
  },
  tstyles:{
    color:"#fff",
    border:"none"
  },
  tr:{
    border:"none"
  }
});

function createData(name, calories, fat,) {
  return { name, calories, fat };
}

const rows = [
  createData(2018, 159, 6.0),
  createData(2019, 237, 9.0),
  createData(2020, 262, 16.0),
  createData(2021, 305, 3.7),

];

function Alumni() {
  const classes = useStyles();

  return (
      <>
        <img src={process.env.PUBLIC_URL+"/images/cse.jpg"} width="100%" height="250px" alt="computer science and engineering"/>
      <Depnav/>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.th}>
          <TableRow className={classes.tr} >
            <TableCell className={classes.tstyles}>Year</TableCell>
            <TableCell className={classes.tstyles} align="right">Details</TableCell>
            <TableCell className={classes.tstyles} align="right">File</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className={classes.tstyles} align="right">{row.calories}</TableCell>
              <TableCell className={classes.tstyles} align="right"><PlayForWorkIcon/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </>
  );
}
export default Alumni;