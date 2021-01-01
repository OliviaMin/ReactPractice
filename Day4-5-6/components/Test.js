

import React from 'react'

export default (props) => {
    return (
        <div>
        <br></br>
        <hr></hr>
        Hi i'm Test
                    </div>
    );
};


// import React from 'react'
// import Filter from './Filter'
// import Option from './Option'

// export default (props) => {
//     return (
//         <div>
//             <button onClick={props.handleDeleteOptions}>Remove All</button>
//             {props.options.length === 0 && <p>Please add option to get Started!</p>}
//             {
//                 props.options.map((x) => <Option key={x} optionText={x}
//                     handleDeleteOption={props.handleDeleteOption}
//                 />)
//             }
//             <Filter opt={props.options} />
//         </div>
//     );

// }