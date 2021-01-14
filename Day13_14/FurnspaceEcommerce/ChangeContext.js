import React, { useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { BrowserRouter, Route, Switch, Router, NavLink, Link } from 'react-router-dom'
import Products from './Products';


import Context from './Context'
import { useHistory } from "react-router-dom";



const ChangeContext = () => {
    const history = useHistory();

    const { user, setUser } = useContext(Context);

    useEffect(() => {
        console.log("New User: ", user);

        localStorage.setItem("username", user.username)
        localStorage.setItem("password", user.password)


    }, [user])

    const handleSubmit = e => {
        e.preventDefault();
        setUser({
            username: e.target.username.value,
            password: e.target.password.value,
            email: e.target.email.value,
        });
        window.alert("Successfully Registered!")
      
    }

    return (
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
                    <label htmlFor="email">Email Id</label>
                     <input 
                     type="email" 
                     className="form-control" 
                     name="email" 
                     id="email" 
                     required/>
                 </div>
                    <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">Register</button></div>

                </form>
            </div>
{/*  <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">
                        username: <input id="username" type="text" name="username" />
                    </label>
                </div>
                <div>
                    <label htmlFor="password">
                        Password: <input id="password" type="password" name="password" />
                    </label>
                </div>
                <div>
                    <label htmlFor="email">
                        Email: <input id="email" type="email" name="email" />
                    </label>
                </div>
                <button type="submit">Register</button>

            </form>
*/}

           

        </div>
    )

}

export default ChangeContext;