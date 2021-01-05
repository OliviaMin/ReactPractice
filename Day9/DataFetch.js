import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetch=()=> {

const [results,setResults] = useState([])

    useEffect(()=>{
        axios.get("http://hn.algolia.com/api/v1/search?query=reacthooks").then(response =>{
            console.log(response.data);
            setResults(response.data.hits);
        });
    },[]);

    return(
        <div>I am DataFetch!
        <ul>
        {results.map( x=> (
            <li key={x.objectID}>
            <a href={x.url}>{x.title}</a></li>
        ))}
        </ul>
        </div>
    )
}

export default DataFetch;