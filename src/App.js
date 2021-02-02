import './App.css';
import React from 'react';
import Programmes from './components/Programmes';
import Department from './department';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import Header from './components/header';
import MediaCard from './components/cards';
import About from './components/about';
import Facilities from './components/facilities';
import Recruiters from "./components/recruiters";
import Events from './components/events';
import Footer from './components/footer';
import Faculty from './components/Faculty';
import Faculty1 from './components/Faculty1';
import Faculty2 from './components/Faculty2';
import Alumni from './components/Alumni';
import Management from './components/Management';
import Research from './components/Research';
import Achievements from './components/Achievements'



export default function App() {

  return (
      <>
      <Header/>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
        <Route path="/" exact component={Openpage}/>
        <Route path="/components/Home" component={Openpage}/>
        <Route path="/components/departmentOverview" component={Department}/>
        <Route path="/components/programmes" component={Programmes}/>
        <Route path="/components/faculty" component={Faculty}/>
        <Route path="/components/faculty1" component={Faculty1}/>
        <Route path="/components/faculty2" component={Faculty2}/>
        <Route path="/components/Alumni" component={Alumni}/>
        <Route path="/components/Research" component={Research}/>
        <Route path="/components/Achievements" component={Achievements}/>        
        </Switch>
      </BrowserRouter> 
      <Footer/>
     {/* <Management/>*/}
      </>
  );
}

const Openpage = ()=> {
  return (
      <>
        <img src={process.env.PUBLIC_URL+"/images/AIT.jpg"} width="100%" height="300" alt="college" />
        <MediaCard />
        <About />
        <br/>
        <Facilities />
        <br/>
        <Recruiters />
        <br/>
        <Events />
        <br/>
        
        </>       
      
  );
}