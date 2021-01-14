import React,{useState,useContext,useEffect} from 'react'
import Context from './Context'
import Table from 'react-bootstrap/Table'
import coffee from './coffee.jpg'
import dining from './dining.jpg'
import Context from "./Context";
import convertible from './Covertible bed(kids).jpg'
import sofa from './L shape sofa.jpg'
import desk from './mocka_marlow_desk_3_.jpg'
import { useHistory } from "react-router-dom";


const Products=()=>{
  const history = useHistory();
    const { setUser } = useContext(Context);

    const [products, setProducts]= useState([
        { id:101,name: "Coffee Desk",description:"Coffee Desk for Kids", price: 10, quantity:0,image:<img src={coffee}/> },
        { id:102,name: "Dining Table",description:"Dining Table 4 seater", price: 20, quantity:0,image:<img src={dining}/> },
        { id:103,name: "Convertible Bed",description:"Convertible Bed for Family", price: 30, quantity:0,image:<img src={convertible}/> },
        { id:104,name: "Sofa",description:"Sofa for Family", price: 100, quantity:0,image:<img src={sofa}/> },
        { id:105,name: "Desk",description:"Desk for Family", price: 200, quantity:0,image:<img src={desk}/> }

      ]);

      const result=products.filter(p=>p.quantity>0)
      const [searchTerm, setSearchTerm] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const searchresults = !searchTerm
    ? products
    : products.filter(pd =>
        pd.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );
        
      const [total,setTotal]=useState(0)
      const { user} = useContext(Context);
       
        
    
      const handleClick=e=>{
        setTotal(prevState=>prevState+e.price)
        let product=products.find((pr)=>pr.id===e.id);
        e.quantity+=1;
        const updatedProducts = products.map(p => {
          if (product.id === p.id) return product;
    
          return p;
      });
    
      setProducts(updatedProducts);
    // console.log("products: ",products);

    }

    const handleRemove=e=>{
      if(e.quantity>0){
        setTotal(prevState=>prevState-e.price)
        let product=products.find((pr)=>pr.id===e.id);
        e.quantity-=1;
  
        const newProducts=products.map(p=>{
          if(product.id===p.id) return product;
          return p;
        });
  
        setProducts(newProducts);
      }}

      const handleCheckout=()=>{
        if(localStorage.getItem("username")===""){
          window.alert("Please Login to CheckOut!")          
        }
     else {
      window.alert("Proceeding To Payment....");
    }

      }

      const handleLogout=()=>{
        localStorage.setItem("username",""),
        localStorage.setItem("password",""),
          setUser({
      username: "",
      password: "",
      email: ""
    });
        history.push("/Products");

     
      }
   
    
      return(
     
      <div>
         <input type="text"
       placeholder="Search" 
       className="mr-sm-2"
       value={searchTerm}
       onChange={handleChange}
       />
      {localStorage.getItem("username")===""?
      <div className="w3-container w3-content w3-center w3-padding-24" style={{maxwidth:"00px"}} id="band">
      <h2 className="w3-wide">Browse Products</h2>
      </div>:
      <div className="w3-container w3-content w3-center w3-padding-24" style={{maxwidth:"00px"}} id="band">
      <h2 className="w3-wide"> <i>Welcome {localStorage.getItem("username")}!&nbsp;Let's Shop!</i></h2>
      <input type="button" onClick={handleLogout} className="w3-button w3-black" value="Logout" style={{float:"right"}}/>
      </div>
    }


          
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Product Id</th>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Product Description</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      {searchresults.map((p) => (
            <tr key={p.id}>
        <td>{p.id}</td>
        <td>{p.image}</td>
        <td>{p.name}</td>
        <td>{p.description}</td>
        <td>₹ {p.price}</td>
        <td>{p.quantity}</td>
        <button onClick={()=>handleClick(p)} className="btn2"><i className="fa fa-cart-plus"></i> Add To Cart</button> &nbsp;

        <button onClick={()=>handleRemove(p)} className="btn"><i className="fa fa-close"></i> Remove</button>

        </tr>
        )
    }
      </tbody>
    </Table>  
          

          <div>
          <div className="w3-container w3-content w3-center w3-padding-24" style={{maxwidth:"00px"}} id="band">
          <h2 className="w3-wide">Your Cart, Items:{result.length}</h2>
          </div>
                   
          {result.length>0?
            <div>

            <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
            {result.map((r)=>
              <tr key={r.id}>
              <td>{r.id}</td>
              <td>{r.image}</td>              
              <td>{r.name}</td>
              <td>{r.description}</td>
              <td>₹{r.price}</td>
              <td>{r.quantity}</td>
              </tr>
              )}
                           </tbody>
          </Table>
          <div className="w3-container w3-content w3-center w3-padding-24" style={{maxwidth:"00px"}} id="band">
          <h4 className="w2-wide"><i>Total Cost: {total}</i></h4>
          <button className="w3-button w3-black" onClick={handleCheckout}>Checkout!</button>  

          </div>

 </div>          
            :
            <div className="w3-container w3-content w3-center w3-padding-24" style={{maxwidth:"00px"}} id="band">
          <h4 className="w2-wide"><i>Your Cart is Empty!</i></h4>
          </div>
          
          }
          </div>
      </div>


      
    )

}

export default Products
