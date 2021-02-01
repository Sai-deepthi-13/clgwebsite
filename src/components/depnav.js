import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';


const Depnav=()=>{
    return(
        <>
    <div className="depmenubar" >
          <ul>
              <li><Link  to='/components/departmentOverview'>Overview</Link></li>
              <li><a  href="/components/Programmes">Programmes</a></li>
              <li><a  href="/components/Faculty">Faculty</a></li>
              <li><a  href="/components/Research">Research</a></li>
              <li><a  href="/components/Achievements">Achievements</a></li>
              <li><a  href="/components/Alumni">Alumni</a></li>
            </ul>
          </div>
    </>
    );
    
}

export default Depnav;