import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context from './Context'


const Home=()=>{
    const { user } = useContext(Context);

    useEffect(() => {
         console.log("user from Home:",user) });

         return(
             <div>
             <Link to="/ChangeContext">Register</Link>
             </div>
         )

}

export default Home

