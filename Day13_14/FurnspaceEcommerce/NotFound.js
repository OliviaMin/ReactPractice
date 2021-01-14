import React from 'react'
import {NavLink,Link} from 'react-router-dom'

const NotFound=()=>{
    return(
    <div>
    <div>
    <div class="w3-container w3-content w3-center w3-padding-64" style={{maxwidth:"800px"}} id="band">
    <h2 class="w3-wide">FURNSPACE</h2>
    <p class="w3-opacity"><i>We love furniture!</i></p>
    <p class="w3-justify">We have created a fictional furniture! website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
    </div>
    <Link to="/">Home</Link>
    </div>  
    )  
}
export default NotFound