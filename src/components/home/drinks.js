import React, { useEffect, useState } from "react"; 
import Nav from './nav'
import { useHistory } from "react-router";

function Drinks() {
 const history = useHistory()
 const user = localStorage.getItem("userToken")
 const token =user?user.replace(/['"]+/g, ""):"";
 
  const [drinksData, setDrinksData] = useState([]);
 
  
  useEffect(() => {
    fetch("http://localhost:8080/api/food/Drinks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDrinksData(data);
      });
  }, []);
  const orderFood = (orderedFood) =>{
    console.log(orderedFood);
    fetch('http://localhost:8080/api/order/food',{
      method:'PUT',
      headers:{
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        orderedFood
      })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
      if(data.error) {
      alert(data.error)
      }else{
        alert('order suceesfuly added');
        
      }

    })
  }
  return (
    <div>
        <Nav/>
        <div className="row">
      {drinksData.map((singleItem) => {
        return (
          <>
            <div className="col s12 m6" key={singleItem._id}>
              <div className="card ">
                <div className="card-content black-text">
                  <img
                    src={singleItem.pic}
                    style={{ width: "120px", height: "120px" }}
                    alt="error"
                  />

                  <span className="card-title"><h2>{singleItem.foodname}</h2></span>
                  <h4>Price: {singleItem.price}</h4>
                  <p>description: {singleItem.desc}</p>
                  
                    
                
                </div>
                <div className="card-action">
                <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={()=>{
              
              localStorage.getItem('userToken')?orderFood(singleItem._id):history.push(`/login/${singleItem._id}`)}
            }>
            Order Food
          </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </div>
  );
}

export default Drinks;
