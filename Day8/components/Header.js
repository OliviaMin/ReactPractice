import React from 'react'
import {NavLink } from 'react-router-dom'



const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active"  exact={true} >DashBoard&nbsp;</NavLink>
        <NavLink to="/create" activeClassName="is-active"  >Create&nbsp;</NavLink>
        <NavLink to="/edit" activeClassName="is-active" >Edit&nbsp;</NavLink>
        <NavLink to="/help" activeClassName="is-active" >Help&nbsp;</NavLink>
        
    </header>
)

export default Header;