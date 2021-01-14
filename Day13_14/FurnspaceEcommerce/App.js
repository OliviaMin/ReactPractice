import React from 'react';
import Provider from './Provider'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import '../styles/style.scss'


const App=()=>{

    return(
      <Provider><Routes/></Provider>     
    )
   
}
ReactDOM.render(<App/>,
  document.getElementById('app')
);