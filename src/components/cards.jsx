import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Carousel from "react-bootstrap/Carousel";


const useStyles = makeStyles({
  root: {
    maxWidth: 300,

  },
  containerstyle:{
      paddingLeft:'40px',
      paddingRight:'40px',
      marginTop:'5px'
  },
  cardstyles:{
    width:"300px",
    height:"400px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    alignItems:"center",
    border:"0",
    backgroundColor:"rgba(220,220,220)"
  },
  divstyles:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:"50px"
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
<div className={classes.divstyles}>
  <Card width="300" >                 
          <CardContent className={classes.cardstyles}>
          <img src={process.env.PUBLIC_URL+"/images/vision.jpg"} alt="vision"/>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
        </CardContent>
  </Card>

  <Card width='300' >      
          <CardContent className={classes.cardstyles}>
          <img src={process.env.PUBLIC_URL+"/images/mission.png"} alt="mission"/>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica

        </CardContent>
    </Card>

    <Card width='100' className={classes.cardstyles} >      
            
          <CardContent >
            <p><img src={process.env.PUBLIC_URL+"/images/aicte.jpg"} alt="abc" width="60px" height="60px"/></p>
            <p><img src={process.env.PUBLIC_URL+"/images/aicte.jpg"} alt="abc" width="60px" height="60px"/></p>
            <p><img src={process.env.PUBLIC_URL+"/images/aicte.jpg"} alt="abc" width="60px" height="60px"/></p>
            <p><img src={process.env.PUBLIC_URL+"/images/aicte.jpg"} alt="abc" width="60px" height="60px"/></p>

        </CardContent>
    </Card>

    <Card width='200' className={classes.cardstyles} style={{textAlign:"center"}}>      
          <CardContent>
            <Carousel>
              <Carousel.Item>
                <h1>News</h1>
                <p>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except 
            
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <h1>News</h1>
                <p>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except 
            
            
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <h1>News</h1>
                <p>
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except 
            
            
            
                </p>
              </Carousel.Item>
            </Carousel>
        </CardContent>
    </Card>
</div>

  );
}
