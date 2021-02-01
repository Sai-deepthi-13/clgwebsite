import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Depnav from './depnav';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "rgb(15, 39, 48)",
    color: theme.palette.common.white,
    
    padding: theme.spacing(2),
  },
  body: {
    fontSize: 15,
  },
  table:{
    color:"rgb(255,255,255)", 
  }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
      backgroundColor:"rgb(209, 57, 46)",
      color:theme.palette.common.white,
    },
}))(TableRow);

function createData(Author, Title,Journal, Date, Paper) {
  return { Author, Title,Journal, Date, Paper };
}

const rows = [
  createData('Dr.____', 'Name', 'Journal', 'oct 2019', ''),
  createData('Dr.____', 'Name', 'Journal', 'jan 2020', ''),
  createData('Dr.____', 'Name', 'Journal', 'march 2020', ''),
  createData('Dr.____', 'Name', 'Journal', 'april 2020', ''),
  createData('Dr.____', 'Name' ,'Journal', 'nov 2020', ''),
];

const useStyles = makeStyles({
  table: {
    width:750,
    margin:"auto",
    marginTop:"50px",
    marginBottom:"100px"
  },
  tbody:{
color:"#fff"
  }
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
      <>
        <img src={process.env.PUBLIC_URL+"/images/cse.jpg"} width="100%" height="250px" alt="computer science and engineering"/>
        <Depnav/>
        <h1 style={{
            marginTop:"50px",
            textAlign:"center",
            margin:"auto",
            padding:"50px"
        }}>Research Publications</h1>
    <TableContainer >
      <Table className={classes.table} aria-label="customized table" align="center">
        <TableHead >
          <TableRow>
            <StyledTableCell className={classes.head}>Author</StyledTableCell>
            <StyledTableCell align="center">Title of the paper</StyledTableCell>
            <StyledTableCell align="center">Journal/Conference</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Paper</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <StyledTableRow key={row.Author}>
              <StyledTableCell className={classes.tbody} component="th" scope="row" align="center">
                {row.Author}
              </StyledTableCell>
              <StyledTableCell className={classes.tbody} align="center">{row.Title}</StyledTableCell>
              <StyledTableCell className={classes.tbody} align="center">{row.Journal}</StyledTableCell>
              <StyledTableCell className={classes.tbody} align="center">{row.Date}</StyledTableCell>
              <StyledTableCell className={classes.tbody} align="center">{row.Paper}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}