import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Route,Link, NavLink} from 'react-router-dom'
import Index from './Index'
import About from './About'
import {UserContext} from './UserContext'



export default function App(){

    const [user, setUser] = useState(null);

    return(
        <BrowserRouter>
        <div>
        <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home &nbsp;</NavLink>
        <NavLink to="/about/" activeClassName="is-active" >About US &nbsp;</NavLink>
       
        </nav>
        <UserContext.Provider value={{user,setUser}}>
        <Route path="/" exact component={Index}/>
        <Route path="/about/" exact component={About}/>
        </UserContext.Provider>
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'));