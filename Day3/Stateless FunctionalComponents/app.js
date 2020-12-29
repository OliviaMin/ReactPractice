class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);       

        this.state = {
            options: []
        }
    }

    componentDidMount(){
        try{
            const json =localStorage.getItem('options');
            const options =JSON.parse(json);
            if(options) {
                this.setState(() => ({options}));
            }
        }
        catch(e){
            //Nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json =JSON.stringify(this.state.options);
            localStorage.setItem ('options', json);
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     }
        // })  ---This code works but returns array

        this.setState(() => ({options:[]})); //This works too!Less code, returns OBJECT
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) =>({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const opt = this.state.options[randomNum];
        //const opt = app.options[0]; calling by the key
        alert(opt);
    }


    handleAddOption(option) {

        //Validation
        if (!option) {
            //if there's an empty string
            return 'Enter valid value to add a person';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The person already exists!'
        }
        this.setState((prevState) => {
            //prevState.options.push(option); {don't manipulate prevstate directly, use concat instead}
            return {
                options: prevState.options.concat(option)
            }

        })
    }
    render() {

        const title = 'COVID Vaccine Recipent Decider';
        return (
            <div>
                <Header title={title} />
                <Action hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}

                    
                    
                    />
                <AddOptions handleAddOption={this.handleAddOption} />
            </div>
        )
    }
}


const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

//Functional Component

const Action = (props) => {    
        return (
            <div>
                <button onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >Decide Recipent</button>
            </div>
        );
    
}

// class Action extends React.Component {
//     // handlePick(){
//     //     alert('handlePick')
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >Decide Recipent</button>
//             </div>
//         );
//     }
// }


const Options = (props) => {
    return (
        <div>
        
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add option to get Started!</p>}
            {
                props.options.map((x) => <Option key={x} optionText={x}
                handleDeleteOption = {props.handleDeleteOption}
                />)
            }
        </div>
    );

}

// class Options extends React.Component {
//     // constructor(props){
//     //     super(props);
//     //     this.handleRemoveAll=this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll(){
//     //     alert('handleRemoveAll')
//     // }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((x) => <Option key={x} optionText={x} />)
//                 }
//             </div>
//         );
//     }
// }


const Option =(props) => {
    return (
        <div>
        {props.optionText}
        <button
        onClick = {(e) => {
            props.handleDeleteOption(props.optionText);
        }}       
        >
        Remove
        </button>
                    </div>
    );
};

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Candidate:  {this.props.optionText}
//             </div>
//         );
//     }
// }

class AddOptions extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        //to prevent browser reloading
        e.preventDefault();
        const option = e.target.elements.option.value.trim();//bcox if u don't use trim, it takes blank spaces nd displays as well
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                //error: error
                error
            }
        })

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}
// const jsx =(
//     <div>
//     <Header />
//     <Action />
//     <Options />
//     <AddOptions />
//     </div>
// )
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));