import React from 'react'
import {NavLink } from 'react-router-dom'


const NavBar=()=>{
    return(
        <header>
        <h1>Furnspace</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard &nbsp;</NavLink>
        <NavLink to="/aboutus" activeClassName="is-active" >AboutUs &nbsp;</NavLink>
        <NavLink to="/login" activeClassName="is-active" >Login &nbsp;</NavLink>
        <NavLink to="/register" activeClassName="is-active" >Register &nbsp;</NavLink>
        <NavLink to="/wishlist" activeClassName="is-active" >Wishlist &nbsp;</NavLink>
        <br></br><br></br>

        </header>
    )
}

export default NavBar