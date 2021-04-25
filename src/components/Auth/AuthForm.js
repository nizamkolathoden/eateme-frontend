import React, {useState, useRef} from 'react'
import classes from './AuthStyles/Auth.module.css'
import Logo from '../../asset/logo 2.svg'
import 'remixicon/fonts/remixicon.css'
import {useHistory} from 'react-router-dom'


export default function AuthForm() {
    const history = useHistory();
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const login = ()=>{
        fetch('http://localhost:8080/api/auth/login',{
          method:'Post',
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            userName,
            password
          })
        }).then(res=>res.json()).then(data=>{
           console.log(data)
          if(data.error){ 
          alert(data.error)
          }else{
          localStorage.setItem('edemeAdminToken',JSON.stringify(data.token))
          history.push('/admin')
          }
        })
 }

    const [checked, setChecked] = useState(false);

    const HandleChange = (e) => {
        setChecked(!checked)
    }
    console.log(checked)

    const check = useRef();

   const focusCheckBox = () => check.current.focus()

    return (
        <>
            <div className={classes.AuthForm} >
             <form onSubmit={e=>{
                 e.preventDefault()
                 login()
                 }}>
                 <img src={Logo} alt="logo" />
                  <div className={classes.error} >
                   <p>Incorrect username or password</p>
                   <i className="ri-close-line"></i>
                  </div>
                 <div className={classes.input} >
                  <input className={classes.username} type="text" placeholder="username" required 
                   onChange={e=>setUserName(e.target.value)} value={userName} />
                  

                  <div  className={classes.wrapper} >
                   <input className={classes.password} type={checked ? "text" : "password"} placeholder="password" required
                   onChange={e=>setPassword(e.target.value)} value={password} />
                   <br/>
                   
                   <label onChange={HandleChange} onClick={focusCheckBox} htmlFor="show">
                    <span>{checked ? <i className="ri-checkbox-fill"></i> : <i className="ri-checkbox-blank-line"></i>}</span>
                   <input className={classes.check} ref={check} id="show" type="checkbox"/>
                        show password
                   </label>
                  </div>
                  <button type="submit" ><span>login</span></button>
                 </div>
             </form>
            </div>
        </>
        
    )
}
