import React,{useState} from "react";
import { useHistory, useParams } from "react-router";
import Logo from "../../asset/svgg.svg";
function UserAuth() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const {id,foodName} = useParams();
    

    console.log(foodName)
    const history = useHistory()
  const sendData = () => {
    fetch("http://localhost:8080/api/register/user", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
          name,
          email,
          orderedFood:id,
          orderName:foodName
      })
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        if(data.existingToken) alert('please order same food once more something went wrong')
        if(data.existingToken||data.token){
           localStorage.setItem('userToken',JSON.stringify(data.existingToken||data.token))
        }
        if(data.error){
            alert(data.error)
        } else history.push('/')

    });
  };
  return (
    <div>
        <form onSubmit={e=>{
            e.preventDefault();
            sendData()
        }
        }>
      <div className="card auth-card">
        <img src={Logo} alt="logo" />
        ATME
        <input type="text" placeholder="name" 
        value={name}
        onChange={e=>{
            setName(e.target.value);
        }}/>
        <input type="email" className="validate" placeholder="email" 
          value={email}
          onChange={e=>{
              setEmail(e.target.value);
          }}/>
        <button className="btn waves-effect waves-light #64b5f6 blue darken-1 center"
        >
          Signup
        </button>
      
      </div>
      </form>
    </div>
  );
}

export default UserAuth;
