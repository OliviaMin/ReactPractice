import React,{useState,useContext,useEffect} from 'react'
import Context from './Context'


const Products=()=>{
    const [products, setProducts]= useState([
        { id:101,name: "Apple", price: 10, quantity:0 },
        { id:102,name: "Banana", price: 20, quantity:0 },
        { id:103,name: "Cherry", price: 30, quantity:0 }
      ]);

      const[cart,setCart]=useState([])
    
      const [total,setTotal]=useState(0)
      const { user } = useContext(Context);
   
        
    
      const handleClick=e=>{
        setTotal(prevState=>prevState+e.price)
        let product=products.find((pr)=>pr.id===e.id);
        e.quantity+=1;
        const updatedProducts = products.map(p => {
          if (product.id === p.id) return product;
    
          return p;
      });
    
      setProducts(updatedProducts);
    //   console.log("New User: ",user);

    }
      return(
     
      <div>
      <table border="1">
      <th>Product ID </th>
      <th>Product Name </th>
      <th>Product Price</th>
      <th>Product Quantity</th>
      <tbody>
      {products.map((p)=>
        <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.name}</td>
        <td>{p.price}</td>
        <td>{p.quantity}</td>
        <button onClick={()=>handleClick(p)}>Add to cart </button>

        </tr>
        )
    }
      </tbody>
           </table>
          Total Cost:{total}
      </div>
    )

}

export default Products