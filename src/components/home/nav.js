import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const token = localStorage.getItem('userToken')
  function render() {
    
    if (token) {
     
      return [
        <li>
          <Link to="/profile">
            <i class="material-icons">person</i>
          </Link>
        </li>,
         <li>
          <i
            class="material-icons"
            onClick={()=>localStorage.removeItem("userToken")}
          >
            exit_to_app
          </i>
        </li>, 
      ];
    }
  }
  return (
    <div>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey">
            <Link to="/" className="brand-logo left">
              Eat
            </Link>
            <ul id="nav-mobile" className="right">
            
              <li>
                <Link to="/burger">Burger</Link>
              </li>
              <li>
                <Link to="/drinks">
                  <i class="material-icons">local_bar</i>
                </Link>
              </li>
              <li>
                <Link to="/other">Other</Link>
              </li>
              {render()}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
