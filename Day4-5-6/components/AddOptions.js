import React from 'react'

export default class AddOptions extends React.Component {
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