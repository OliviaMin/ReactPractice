import React, { useState } from 'react';
import Context from './Context'
const Provider = ({ children }) => {
    const [user, setUser] = useState({
        username: "", 
        password: "",
        email:""    
    });

const value = {
    user,
    setUser
}
return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
);
}

export default Provider