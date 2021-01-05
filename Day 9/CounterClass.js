import React from 'react'
import ReactDOM from 'react-dom'

export default class CounterClass extends React.Component{
    state={count:0,
    isOn:false,
    x:null,
    y:null,
    status:navigator.onLine
    }

    //ananlogous to useEffect in Functional Components!
    componentDidMount(){
        document.title=`You are clicking ${this.state.count} times!`;
        window.addEventListener('mousemove',this.handleMouseMove);
        window.addEventListener('online',this.handleOnline);
        window.addEventListener('offline',this.handleOffline);
    }

    componentDidUpdate(){
        document.title=`You are clicking ${this.state.count} times!`;
    }

    componentWillUnmount(){
        window.removeEventListener('mousemove',this.handleMouseMove);
        window.removeEventListener('online',this.handleOnline);
        window.removeEventListener('offline',this.handleOffline);

    }
    increment = () =>{
        this.setState(prevState =>({count:prevState.count+1}))
    }

    isToggle =() => {
        this.setState(prevState=>({
            isOn:!prevState.isOn
        }))
    }

    handleMouseMove =e=>{
this.setState({
    x:e.pageX,
    y:e.pageY
})
    }

    handleOnline=()=>{
        this.setState(status(true))
    }

    handleOffline=()=>{
        this.setState(status(false))
    }
    render(){
        return(
            
            <div>I am Class!
            
            <button onClick={this.increment}>{this.state.count}</button>
            <div style={{
                height:'50px',
                width:'50px',
                background:this.state.isOn?"yellow":"grey"
            }} onClick={this.isToggle}></div>
            <h2>Mouse Positions</h2>
            x position: {this.state.x}<br></br>
            y position:{this.state.y}

            <h2>Network Status</h2>
    You are {this.state.status?"Connected":"Disconnected"}
            </div>
            
        )
    }
}

ReactDOM.render(<CounterClass/>,document.getElementById('app'));