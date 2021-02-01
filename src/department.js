import React from 'react';
import DepartmentOverview from './components/departmentOverview';
import Programmes from './components/Programmes';
import Faculty from './components/Faculty';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function Department() {
  return (
      <>        
        
        <Router> 
        <Switch>  
        <DepartmentOverview />
        <Route path="/components/programmes" component={Programmes}/>
        <Route path="/components/faculty" component={Faculty}/>
        </Switch>
      </Router>
        
        </> 
  );
}

export default Department;
