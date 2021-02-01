import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "react-bootstrap/Carousel";




const useStyles = makeStyles({
    pstyles:{
        textAlign:"center",
        color:"rgb(209, 57, 46)",
        marginBottom:"30px"
    },
    boxstyles:{    
        border:"2px solid rgb(227,227,227)",           
        marginLeft:"40px",
        marginRight:"40px",
        marginBottom:"50px",
        height:"250px",
        boxShadow:"10px 10px 10px rgb(247, 247, 247)",
        backgroundColor:"rgb(237,237,237)"

    },
    imgstyles:{
        width:"100%",
        height:"300px"
    },
    carouselstyles:{
        height:"300px",
        width:"100%"
    },
    carouselItemstyles:{
        backgroundColor:"red"
    },

});


export default function Events() {
    const classes = useStyles();
    return(
        <div>
            <h1 className={classes.pstyles}>Events</h1>
            <div className={classes.boxstyles}>               
            <Carousel className={classes.carouselstyles}>
                <Carousel.Item >
                    <img className={classes.imgstyles}   src={process.env.PUBLIC_URL+"/images/events.jpg"} alt="jpg"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={classes.imgstyles}  src={process.env.PUBLIC_URL+"/images/events.jpg"} alt="jpg"/>
                </Carousel.Item>

                <Carousel.Item>
                    <img className={classes.imgstyles}   src={process.env.PUBLIC_URL+"/images/events.jpg"} alt="jpg"/>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
    
}