import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pstyles:{
        textAlign:"center",
        color:"rgb(209, 57, 46)"
    },
    boxstyles:{               
        marginLeft:"40px",
        marginRight:"40px",
        flexWrap:"wrap",
        listStyle:"none",
        display:"flex",
        justifyContent:"space-between"
    },
    imgstyles:{
        height:"150px",
        width:"150px",
        marginTop:"20px",
        marginBottom:"20px"
        
    },
    tstyles:{
        width:"100%",
        marginTop:"20px"

    },
    trstyles:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    },
    
});

export default function Recruiters(){
    const classes = useStyles();

    return(
        <div>
            <h1 className={classes.pstyles}>Top Recruiters</h1>
               <table className={classes.tstyles}>
                   <tbody>
                   <tr className={classes.trstyles}>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>

                   </tr>
                   <tr className={classes.trstyles}>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                       <td><img src={process.env.PUBLIC_URL+"/images/mindtree.jpg"} alt="logo" className={classes.imgstyles}/></td>
                   </tr>
                   </tbody>                  
               </table>
            </div>
        
    );


}