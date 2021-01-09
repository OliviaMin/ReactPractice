import React from 'react'

const UserContext=React.createContext({
    users:[{
        name:"",
        email:"",
        mobile:"",
        password:""
    }]
})

export default UserContext;