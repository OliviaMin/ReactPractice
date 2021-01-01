import React,{useState} from 'react'

// export default class Filter extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: props.opt,
//             searchTerm: ''
//         }
//         this.dynamicSearch=this.dynamicSearch.bind(this)
//     }

//     editSearchTerm = (e) => {
//         this.setState({ searchTerm: e.target.value });
//     }

//     dynamicSearch = () => {
//         return this.state.value.filter(val => val.toLowerCase().includes(this.state.searchTerm.toLocaleLowerCase()))
//     }
//     render() {
//         return (
//             <div>
//                 <input type='text' value={this.state.searchTerm} onChange={this.editSearchTerm} placeholder="search here!" />
//                 <br></br>
//                 <h1>Results</h1>
//                 {value={dynamicSearch()}}
//                 {this.props.value.map(val => <Name val={val} />)}
//                 {this.props.val}

//             </div>
//         )
//     }
// }

// export class NamesContainer extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.value.map(val => <Name val={val} />)}
//             </div>
//         )
//     }
// }

// export class Name extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.val}
//             </div>
//         )
//     }
// }



export default (props) => {

    const [option, setOption] = React.useState(props.opt);
    const [search, setSearch] = React.useState("");

    return (
        <div>
        <br></br>
            <input placeholder="Search Here.."
                onChange={e => {
                    const test = props.opt.filter(o => {
                        return o.toLowerCase().includes(e.target.value.toLowerCase());
                        
                    });

                    
                    console.log("Option: ", test);

                    setOption(test);
                    setSearch(e.target.value);

                     }}
                type="text"
                value={search}
            />

            {option.map(o => (
                <p key={o}>{o}</p>
            ))}
           


        </div>
    )
};

// export default (props) => {

//     // const handleSearch = e =>{

//     //     const search = e.target.value.trim();
//         const [searchTerm, setSearch] = useState("");


//                 // console.log(search)


//     //const [search, setSearch] = useState('')

//     return (
//         <div>
//         <input type="search" placeholder="Search" onChange=

//         {(e) => {setSearch(e.target.value)}}/>

//         {props.opt.filter((val) => {
// if(searchTerm==""){
//     return val
// }
// else if(val.toLowerCase().includes(searchTerm.toLowerCase())) {

// }

//         }).map((val,key) => {
//             return (
//                <div key={key}>
//                <h1>{val}</h1>
//                {console.log(val)}

//                </div>
//             )
//         })

//     }


//         {props.opt.length === 0 && <p>Please add option to get Search!!</p>}
//         {
//            props.opt.map((x) => <ul key={x}>{x}</ul>)

//         }




//  </div>
//     )
// };

// export default class Filter extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {setSearchTerm : ""}

//     }
//     render(){
//         return(
//             <div><br></br>
//             <input type="text" placeholder="Search" 
//              />
//             {/* 
//             // {searchTerm.filter((val) => {
//             //     if(this.props.opt == "") {
//             //         return val
//             //     }
//             //     else if(val.toLowerCase().includes(this.props.opt.toLowerCase())){

//             //     }
//             // }).map((val,key) => {
//             //     return(
//             //         <div key={key}>
//             //         <p>{val}</p>
//             //         </div>
//             //     );
//             // })}
// */}




//             <ul>{this.props.opt}</ul>

            // {this.props.opt.length === 0 && <p>Please add option to get Search!!</p>}
            // {
            //    this.props.opt.map((x) => <ul key={x}>{x}</ul>)

            // }
//             </div>
//         )
//     }
// }