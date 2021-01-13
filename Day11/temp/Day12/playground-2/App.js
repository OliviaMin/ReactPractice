import React from 'react';
import Provider from './Provider'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch,Router,NavLink} from 'react-router-dom'
import ChangeContext from './ChangeContext'
import Home from './Home'
import Products from './Products';


const App=()=>{

    return(
        <BrowserRouter>
        <div>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home &nbsp;</NavLink>
        <NavLink to="/Products" activeClassName="is-active" >Products &nbsp;</NavLink>

        <Switch>
        <Provider>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/ChangeContext" component={ChangeContext}/> 
        <Route path="/Products" component={Products}/> 

        </Provider>
        </Switch>
        </div>
        </BrowserRouter>
    )
   
}
ReactDOM.render(<App/>,
  document.getElementById('app')
);