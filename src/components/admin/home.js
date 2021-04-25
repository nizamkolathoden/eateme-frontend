import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  const admin = localStorage.getItem("edemeAdminToken");
  const [foodname, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [pic, setPic] = useState("");
  const [category, setCategory] = useState("");
  const token = localStorage.getItem("edemeAdminToken").replace(/['"]+/g, "");
  console.log(localStorage.getItem("edemeAdminToken"));
  const submit = () => {
    fetch("http://localhost:8080/api/admin/addfood", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        foodname,
        price,
        desc,
        category,
        pic,
      }),
    })
      .then((res) => res.json())
      .then((respon) => {
        console.log(respon);
        if (respon.error) alert(respon.error);
      });
  };
  //push
  if (!admin) history.push("/admin/login");
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          Food Name{" "}
          <input
            type="text"
            placeholder="food name"
            value={foodname}
            onChange={(e) => setFoodname(e.target.value)}
          />
          Price{" "}
          <input
            type="text"
            placeholder="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
          description{" "}
          <input
            type="text"
            placeholder="description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          Pic
          <input
            type="text"
            placeholder="Add pic"
            value={pic}
            onChange={(e) => setPic(e.target.value)}
          />
          Catageory
          <select
            className="browser-default"
            onClick={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled selected>
              Choose your option
            </option>

            <option value="Drinks">Drinks</option>
            <option value="Burger">Burger</option>
            <option value="Other">Other</option>
          </select>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
