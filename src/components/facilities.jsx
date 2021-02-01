import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button,Box } from '@material-ui/core';
import Carousel from "react-bootstrap/Carousel";
//import { CarouselItem } from 'react-bootstrap';


const useStyles = makeStyles({
    boxstyles:{
        border:"2px solid black",                
        width:"100%",
        height:"200px",   
    },
    containerstyles:{
        border:"2px solid rgb(237, 237, 237)",
        width:"80%",
        marginLeft:"10%",
        marginBottom:"50px",
        padding:"0",
        height:"300px" ,
        boxShadow:"10px 10px 10px rgb(247, 247, 247)"     
    },
    pstyles:{
        textAlign:"center",
        color:"rgb(209, 57, 46)",
        marginBottom:"30px"
    },
    imgstyles:{
        width:"1200px",
        height:"295px"
    },
    carouselstyles:{
        height:"300px",
        width:"100%"
    }

});
function Facilities() {
        const classes = useStyles();
        return(
            <div>
                <h1 className={classes.pstyles}>Facilities</h1>
                <Box  className={classes.containerstyles} display="flex" flexDirection="row" >
                    <Box  display="flex" justifyContent="space-around" flexDirection="column" p={2} m={0} bgcolor="rgb(209, 57, 46)" >
                        <Box p={1} ><Button style={{color:"white"}} >Library</Button></Box>
                        <Box p={1} ><Button style={{color:"white"}}>Gymnasium</Button></Box>
                        <Box p={1} ><Button style={{color:"white"}}>Sports</Button></Box>
                        <Box p={1} ><Button style={{color:"white"}}>Hostel</Button></Box>
                    </Box>

                    <Box>                    
                    <Carousel className={classes.carouselstyles}>
                        <Carousel.Item>
                        <img
                            className={classes.imgstyles}
                            src={process.env.PUBLIC_URL+"/images/library.jpg"}
                            alt="library"
                        />
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                            className={classes.imgstyles}
                            src={process.env.PUBLIC_URL+"/images/gym.jpg"}
                            alt="gym"
                        />
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                            className={classes.imgstyles}
                            src={process.env.PUBLIC_URL+"/images/sports.jpg"}
                            alt="sports"
                        />
                        </Carousel.Item>

                        <Carousel.Item>
                        <img
                            className={classes.imgstyles}
                            src={process.env.PUBLIC_URL+"/images/hostel.jpg"}
                            alt="hostel"
                        />
                        </Carousel.Item>
                    </Carousel>
                    </Box>     
                </Box>
                
            </div>
            
        );

    }

export default Facilities;