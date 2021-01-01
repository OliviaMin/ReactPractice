import React from 'react'


export default (props) => {
    return (
        <div>
        <strong>Name:&nbsp;</strong>
        {props.optionText}&nbsp;&nbsp;
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