import React from "react";
import {Link} from 'react-router-dom'
function Root() {
  return (
    <div>
     
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Eateme</Link>
        <ul id="nav-mobile" className="right">
          <li><Link to="/burger">Burger</Link></li>
          <li><Link to="/drings">Drinks</Link></li>
          <li><Link to="/other">Other</Link></li>
          
        </ul>
      </div>
    </nav>
  </div>
  <div className="row">
    <div className="col s12 m6">
      <div className="card grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Online Restrent</span>
          <p>Its a simple Online Restrent.
          </p>
        </div>
        <div className="card-action">
        
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col s12 m6">
      <div className="card grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Burger</span>
          <p>verity of  Burger.
         </p>
        </div>
        <div className="card-action">
        
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default Root;
