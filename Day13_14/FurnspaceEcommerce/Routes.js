import React from 'react'
import { BrowserRouter, Route, Switch,Link, NavLink } from 'react-router-dom'
import ChangeContext from './ChangeContext'
import Home from './Home'
import Products from './Products';
import Login from './Login'
import NotFound from './NotFound'
import NavBar from './NavBar'

const Routes=()=>{

    return(
        <BrowserRouter>
        <div>
        <NavBar/>
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/ChangeContext" component={ChangeContext}/> 
        <Route path="/Products" component={Products}/> 
        <Route path="/Login" component={Login}/> 
        <Route path="/NotFound" component={NotFound}/>         
        </Switch>
        </div>
        </BrowserRouter>
    )
}

export default Routes