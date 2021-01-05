import React from 'react'
import ReactDOM from 'react-dom'
import CounterFunction from './playground/CounterFunction'
import CounterClass from './playground/CounterClass'
import './styles/style.scss';
import DataFetch from './playground/DataFetch'

// const Jsx=()=> (
//     <div>
//     <div className="row">
//     <div className="column" >
//     <h1>Class Example</h1>
//     <CounterClass/>
     
//     </div>
//     <div className="column">
//     <h1>Function Example</h1>
//     <CounterFunction/>
      
//     </div>
//   </div>

    
    
//     </div>
// )

const AxiosEg=()=>(
    <div><DataFetch/></div>
)
ReactDOM.render(<AxiosEg/>, document.getElementById('app'));
