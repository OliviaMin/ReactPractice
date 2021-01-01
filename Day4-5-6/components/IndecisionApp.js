import React from 'react'
import AddOptions from './AddOptions'
import Action from './Action'
import Header from './Header'
import Options from './Options'
import Test from './Test'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleSearch = this.handleSearch.bind(this);

        this.state = {
            options: [],
            // selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            // this.handleClearSelectedOption=this.handleClearSelectedOption(this);


            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            //Nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillMount() {
        console.log('componentWillMount');
    }





    handleDeleteOptions() {

        this.setState(() => ({ options: [] })); //This works too!Less code, returns OBJECT
    }


    // handleClearSelectedOption (){
    //     this.setState(() => ({ selectedOption: undefined }));
    // }




    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }))
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const opt = this.state.options[randomNum];
        //const opt = app.options[0]; calling by the key
        this.setState(() => ({
            selectedOption: opt
        }));
    }

    handleSearch(e) {
        // this.setState(() => ({
        //     options: this.state.options.filter((option) => {
        //         return option.toLowerCase().includes(e.target.value.toLowerCase());            })
        // }))

        console.log(e.target.value);
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
                    handleSearch={this.handleSearch}
                />
                <AddOptions handleAddOption={this.handleAddOption} />
                <Test />
                {/* 
            
             <OptionModal 
                selectedOption={this.state.selectedOption}
                handleClearSelectedOption={this.handleClearSelectedOption}
                />
            
               */}
            </div>
        )
    }
}