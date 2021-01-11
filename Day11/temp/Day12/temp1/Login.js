import React,{useContext, useState, useReducer, useEffect} from 'react'
import WishList from './Wishlist'
import UserContext from './context'
import {useHistory, Redirect, Link } from "react-router-dom";

const Login = () => {


    const [form, setState] = useState({
        username: '',
        password: '',
        isLoggedin:false
      });

      
    const printValues = e => {
        e.preventDefault();
        if(form.username=="admin" && form.password=="123"){
        // //   localStorage.setItem('token',form.username);
     
        // console.log(form.username,form.isLoggedin);

        // // document.location="/wishlist"
        <Link to="/wishlist"></Link>
        }
        else{
            console.log("Wrong Credentials!!",form.username,form.isLoggedin)
        }
      };
    
      const updateField = e => {
          
        setState({
            isLoggedin:true,
          ...form,
          [e.target.name]: e.target.value
        });
      };
    return (

        <div>
        <form onSubmit={printValues}>
        <label>
          Username:
          <input
            value={form.username}
            name="username"
            onChange={updateField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={form.password}
            name="password"
            type="password"
            onChange={updateField}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
       
        </div>
    )
}

export default Login


// const Register = () => {

//     const [input, setInput] = useState(0);

//     const [myArray, dispatch] = useReducer((myArray, { type, value }) => {
//       switch (type) {
//         case "add":
//           return [...myArray, value];

//         default:
//           return myArray;
//       }
//     }, [1, 2, 3]);

//     return (
//       <div>
//         <input value={input} onInput={e => setInput(e.target.value)} />
//         <button onClick={() => dispatch({ type: "add", value: input})}>
//           Add
//         </button>

//         {myArray.map((item, index) => (
//           <div>
//             <h2>
//               {item}

//             </h2>
//           </div>
//         ))}
//       </div>
//     );
// }

// export default Register