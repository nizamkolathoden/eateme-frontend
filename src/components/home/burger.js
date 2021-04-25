import React, { useEffect, useState } from "react";
import Nav from './nav'

function Burger() {
  const [burgerData, setBurgerData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/food/Burger")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBurgerData(data);
      });
  }, []);
  return (
    <div>
        <Nav/>
        <div className="row">
      {burgerData.map((singleItem) => {
        return (
          <>
            <div className="col s12 m6">
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
          >
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

export default Burger;
