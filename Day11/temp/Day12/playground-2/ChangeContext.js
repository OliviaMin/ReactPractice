import React, { useContext, useEffect} from 'react';
import { BrowserRouter, Route, Switch,Router,NavLink,Link} from 'react-router-dom'
import Products from './Products';

import Context from './Context'


const ChangeContext=()=>{
const {user,setUser}=useContext(Context);

useEffect(()=>{
    console.log("New User: ",user);

    localStorage.setItem("token",user.username)

},[user])

const handleSubmit=e=>{
    e.preventDefault();
    setUser({
        username:e.target.username.value,
        password:e.target.password.value,
        email:e.target.email.value,
    });
    // <Link to="/Products" >Products &nbsp;</Link>

}

return(
    <div>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="username">
    username: <input id="username" type="text" name="username"/>
    </label>
        </div>
        <div>
    <label htmlFor="password">
    Password: <input id="password" type="password" name="password"/>
    </label>
        </div>
        <div>
        <label htmlFor="email">
        Email: <input id="email" type="email" name="email"/>
        </label>
            </div>
        <button type="submit">Register</button>
    
    </form>
    
    
    </div>
)

}

export default ChangeContext;