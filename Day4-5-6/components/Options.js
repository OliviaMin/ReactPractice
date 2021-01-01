import React from 'react'
import Filter from './Filter'
import Option from './Option'

export default (props) => {
    return (
        <div><Filter opt={props.options} />
        <br></br>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            
            {props.options.length === 0 && <p>Please add option to get Started!</p>}
            {
                props.options.map((x) => <Option key={x} optionText={x}
                    handleDeleteOption={props.handleDeleteOption}
                />)
            }
            
        </div>
    );

}

// export default (props) => {

//     const [option, setOption] = React.useState(props.opt);
//     const [search, setSearch] = React.useState("");

//     return (
//         <div>
//         <br></br>
//             <input placeholder="Search Here.."
            //     onChange={e => {
            //         const test = props.opt.filter(o => {
            //             return o.toLowerCase().includes(e.target.value.toLowerCase());
                        
            //         });

                    
            //         console.log("Option: ", test);

            //         setOption(test);
            //         setSearch(e.target.value);

            //          }}
            //     type="text"
            //     value={search}
            // />

//             {option.map(o => (
//                 <p key={o}>{o}</p>
//             ))}
           


//         </div>
//     )
// };