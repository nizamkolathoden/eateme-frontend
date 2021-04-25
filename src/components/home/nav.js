import React from "react";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey">
            <Link to="/" className="brand-logo left">
              Eateme
            </Link>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/burger">Burger</Link>
              </li>
              <li>
                <Link to="/drinks">Drinks</Link>
              </li>
              <li>
                <Link to="/other">Other</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
