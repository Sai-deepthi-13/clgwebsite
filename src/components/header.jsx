import React from 'react';
import { Button} from "@material-ui/core";
import SchoolSharpIcon from '@material-ui/icons/SchoolSharp';
import { makeStyles } from '@material-ui/styles';
import './header.css';



const useStyles = makeStyles(()=>({
    buttonstyles:{
        color:"rgb(255,255,255)",
        borderRadius: "30px",
        backgroundColor:"rgb(247, 19, 2)",
        width:"100px",
        display:"flex",
        alignContent:"spaceAround",
        justifyContent:"spaceAround",
        height:"40px"
        
    },
    iconstyles:{
      color:"#fff"
    }
}));

const Header =  ()=> {
    const classes = useStyles();
        return ( 
            <>

            <div className="menubar">
            <SchoolSharpIcon className={classes.iconstyles}></SchoolSharpIcon>

            <ul>                
                <li><a href="/components/Home">Home</a> </li>
                <li><a href="#">Leadership</a> </li>
                <li><a href="#">Academics</a>
                    <div className="submenudepartments">
                      <ul>
                        <li>                       
                          <a href="/components/departmentOverview#"> Computer Science</a>
                        </li>
                      </ul>
                    </div>
                 </li>
                <li><a href="#">Important Documents</a>  </li>
                <li><a href="#">TEQUIP</a> </li>
                <li><a href="#">Placements</a> </li>
                <li><a href="#">Examinations</a> </li>
                <li><a href="#">Events</a> </li>
              </ul>
            <Button color="inherit" className={classes.buttonstyles}>Login</Button>
            </div>  
            </>       
         );
    } 
export default Header;

