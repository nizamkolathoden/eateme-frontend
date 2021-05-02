import React, { useEffect, useState } from "react";
import Nav from "./nav";

function Profile() {
  const [profile, setProfile] = useState([]);




  useEffect(() => {
  const user = localStorage.getItem("userToken");
    const token = user.replace(/['"]+/g, "");
    fetch("http://localhost:8080/api/profile", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProfile(data);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{profile.name}</span>
              <p>Email:{profile.email}</p>
            </div>
          </div>
        </div>
      </div>
      <h1>Your orders</h1>
      {profile.food
        ? profile.food.map((singleFood,i) => {
  
            return (

              <>
            <div className='row'>
               <div className="col s12 m6" key={i}>
              <div className="card ">
                <div className="card-content black-text">
                  <img
                    src={singleFood.orderedFood.pic}
                    style={{ width: "120px", height: "120px" }}
                    alt="error"
                  />
                    
                  <span className="card-title"><h2>{singleFood.orderedFood.foodname}</h2></span>
                  <h4>Price: {singleFood.orderedFood.price}</h4>
                  <p>description: {singleFood.orderedFood.desc}</p>
                  
                  <button
            className="btn waves-effect waves-light">{singleFood.isServed||singleFood.isCompleted?"orderComleted":"cancel"}</button>
                </div>
                </div>
                </div>
                </div>
               
              </>
            );
          })
        : ""}
    </div>
  );
}

export default Profile;
