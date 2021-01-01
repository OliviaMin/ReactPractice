import React from 'react'

export default(props) => {    
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >Decide Recipent</button>
        </div>
    );

}