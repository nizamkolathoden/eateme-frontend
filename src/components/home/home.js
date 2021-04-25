import React from "react";
import {useHistory} from 'react-router-dom'
import Nav from './nav'
function Root() {
  const history = useHistory();
  return (
    <div>
     <Nav/>
 
  <div className="row">
    <div className="col s12 m12">
      <div className="card grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Eateme</span>
          <p>Its a simple Online Restrent.
          </p>
          <p>no waiting for food 
          </p>
        </div>
        <div className="card-action">
        
        </div>
      </div>
    </div>
  </div>

  <div className="row">
    <div className="col s12 m6">
   
      <div className="card red" onClick={()=>history.push('/burger')}>
        <div className="card-content black-text">
        <img src="https://res.cloudinary.com/dnkybekht/image/upload/v1619338709/ecsfq6yv0mqjaeq3lshd.jpg" style={{width:'120px',height:'120px'}} 
        alt='error'/>

          <span className="card-title">Burger</span>
          <p>verity of  Burger.
         </p>
        </div>
        <div className="card-action">
        
        </div>
      </div>
    </div>


  <div className="col s12 m6">
   
   <div className="card blue" onClick={()=>history.push('/drinks')}>
     <div className="card-content black-text">
     <img  src="https://res.cloudinary.com/dnkybekht/image/upload/v1619338892/aphkzevnooemx1p1gpcz.jpg" style={{width:'120px',height:'120px'}}
     alt='error'/>

       <span className="card-title">Drinks</span>
       <p>verity of  Drinks.
      </p>
     </div>
     <div className="card-action">
     
     </div>
   </div>
 </div>

 <div className="col s12 m6">
   
   <div className="card grey">
     <div className="card-content black-text" onClick={()=>history.push('/other')}>
     <img  src="https://res.cloudinary.com/dnkybekht/image/upload/v1619340160/otrd2h7toelpzsnwgxcp.jpg" style={{width:'120px',height:'120px'}}
     alt='error'/>

       <span className="card-title">Others</span>
       <p>verity of  Foods.
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
