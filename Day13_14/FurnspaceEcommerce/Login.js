import React from 'react'
import { useHistory } from "react-router-dom";


const Login=()=>{

    const history = useHistory();
    const handleSubmit=e=>{
        e.preventDefault();
        let username=e.target.username.value;
        let password=e.target.password.value;
        let uname=localStorage.getItem("username");
        let pwd=localStorage.getItem("password")
        if((username===uname && password===pwd)&&(uname!="" && pwd!="")){
            history.push("/Products");
        }
        else{
            window.alert("Please Register First")
            history.push("/ChangeContext");

        }
      

    }
    return(
        <div>

        <div className="login-clean">
        <form onSubmit={handleSubmit}>

            <div className="illustration"></div>
            <div className="form-group">
                <label htmlFor="username">Enter Username</label>
                <input 
                type="text" 
                className="form-control" 
                name="username" 
                id="username" 
                pattern="[a-z]{1,15}"
                title="Username should only contain lowercase letters. e.g. john"
                required/>
            </div>
            <div className="form-group">
               <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className="form-control" 
                name="password" 
                id="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                required />
            </div>
          
            <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">Login</button></div>

        </form>
    </div>

        </div>
    )
}

export default Login