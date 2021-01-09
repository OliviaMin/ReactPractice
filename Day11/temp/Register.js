import React,{useState} from 'react'

const initialState={
    users:[{
        name:"",
        email:"",
        mobile:"",
        password:""
    }]
}

const Register = () => {

    const[form, setForm] = useState(initialState)

    const[user,setUser] = useState(null)

const handleChange= e =>{
    setForm({
        ...form.users,
        [e.target.name]:e.target.value

    })
}

const handleSubmit= e =>{
    e.preventDefault()
    setUser(form.users)
    setForm(initialState)
}


    return (
        <div>
        <form style={{
            display: "grid",
            alignItems: "center",
            justifyItems: "center"
        }}
        onSubmit={handleSubmit}
        >
        UserName: <input type="text" placeholder="UserName" name="username" onChange={handleChange} value={form.username}/><br></br>
        Email: <input type="email" placeholder="Type your email" name="email" onChange={handleChange} value={form.email}/><br></br>
        Mobile: <input type="number" placeholder="Type your Mobile" name="mobile" onChange={handleChange} value={form.mobile}/><br></br>
        Password: <input type="password" placeholder="Type your password" name="password" onChange={handleChange} value={form.password}/><br></br>
            <button type="submit">Register!</button>
            </form>

            {user && JSON.stringify(user,null,2)}
        </div>
    )
}

export default Register