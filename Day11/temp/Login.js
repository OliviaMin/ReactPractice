import React from 'react'

const Login=()=>{
    return(
        <div>
       
<form style={{
    display: "grid",
    alignItems: "center",
    justifyItems: "center"
}}>
UserName: <input 
type="text" 
placeholder="UserName"
/>
Password: <input type="password" placeholder="Type your password"/>
<button type="submit">Login!</button>

</form>
        </div>
    )
}

export default Login