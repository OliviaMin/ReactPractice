class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state={
            count: 0 //props.count
        };

    }
    
    componentDidMount(){
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);

        if(!isNaN(count)){
            this.setState(()=> ({count}));
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }

    handleAddOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count +1
            }
        })

    }

    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count: prevState.count -1
            }
        })   

    }

    handleReset(){
        this.setState(() => {
            return {
                 count:0
            };
        })


        //this.setState({
        //    count:0
        // });

        // this.setState({        
        //count:this.state.count + 1
        //})

        //This also works same as above, but its asynchronous,
        //takes previous stale value i.e if count = 5,
        //reset makes it 6. Doesn't makes it 0 first and adds 1 to it.
        //working on stale data. HENCE USE PREVSTATE!!!!!!!!!

        //so, correct sysntax

        // this.setState((prevState) => {
        //     return{
        //         count: prevState.count +1
        //     }
        // })   
    }


    render(){
        return(
            <div>
            <h1>Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count: 0
// }


ReactDOM.render(<Counter  /*count={10}*//>,document.getElementById('app'));