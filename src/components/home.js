import React from 'react';
import Header from './header';
import MediaCard from './cards';
import About from './about'
import Facilities from './facilities';
import Recruiters from "./recruiters";
import Events from './events';
import Footer from './footer';




 function Home() {

  return (
      <>
        <Header />
        <img src={process.env.PUBLIC_URL+"/images/gym.jpg"} width="100%" height="300" alt="college" />
        <MediaCard />
        <About />
        <br/>
        <Facilities />
        <br/>
        <Recruiters />
        <br/>
        <Events />
        <br/>
        <Footer />
        <br/>
        
        </>       
      
  );
}

export default Home;