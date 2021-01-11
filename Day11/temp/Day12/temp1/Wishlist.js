import React,{useContext, useState, useReducer, useEffect} from 'react'

const Wishlist=()=>{

  const [products, setProducts]= useState([
    { name: "Apple", price: 10, quantity:0 },
    { name: "Banana", price: 20, quantity:0 },
    { name: "Cherry", price: 30, quantity:0 }
  ]);

  const [total,setTotal]=useState(0)

  const handleClick=e=>{
    setTotal(prevState=>prevState+e.price)
    let product=products.find((pr)=>pr.name===e.name);
    e.quantity+=1;
    const updatedProducts = products.map(p => {
      if (product.name === p.name) return product;

      return p;
  });

  setProducts(updatedProducts);

   
  };

    return(
        <div>
      {products.map((p)=>
      <li key={p.name}>{p.name}{p.price}&nbsp;{p.quantity}
      <button onClick={()=>handleClick(p)}>Add to cart </button>
      

      </li>)
      }
      Price: {total}
      
        </div>
    )
}

export default Wishlist