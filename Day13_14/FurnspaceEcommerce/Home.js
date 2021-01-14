import React, { useContext, useEffect } from 'react';
import Context from './Context'
import Carousel from 'react-bootstrap/Carousel'


const Home=()=>{
    const { user } = useContext(Context);

    useEffect(() => {
         console.log("user from Home:",user) });

         return(
             <div>

               <Carousel>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://i.picsum.photos/id/311/1000/563.jpg?hmac=M6WX06qTw-1eQj4z12Zh-NPeJnll-6a_yx9CbNnRPHs"

               
                 alt="First slide"
               />
               <Carousel.Caption>
                 <h3>Furnspace</h3>
                 <p>Customised Furniture, just for You!</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://i.picsum.photos/id/1068/7117/4090.jpg?hmac=Y6xHXrzHsNlbRTbhzZ53Yk-Ux9lUECBLbbP4wb5a1qY
                 "
                 alt="Third slide"
               />
           
               <Carousel.Caption>
                 <h3>Aesthetic Designs!</h3>
                 <p>Reminise the netted sunbeam dance</p>
               </Carousel.Caption>
             </Carousel.Item>
             <Carousel.Item>
               <img
                 className="d-block w-100"
                 src="https://i.picsum.photos/id/445/4256/2819.jpg?hmac=99qT1IPidZrzaXTgG1ixRRVwElWXUlNepU2k692G44c
                 "
                 alt="Third slide"
               />
           
               <Carousel.Caption>
                 <h3>Affordable, no extra Chargers!</h3>
                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
             </Carousel.Item>
           </Carousel>
           <div>
           <div class="w3-container w3-content w3-center w3-padding-64" style={{maxwidth:"800px"}} id="band">
           <h2 class="w3-wide">FURNSPACE</h2>
           <p class="w3-opacity"><i>We love furniture!</i></p>
           <p class="w3-justify">We have created a fictional furniture! website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
             adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
           </div>
             </div>
         )

}

export default Home

