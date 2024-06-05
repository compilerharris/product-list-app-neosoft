import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Product from './Product';

const List = () => {
	const [list,setList] = useState([]);

	useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
      .then(res => setList(res.data))
      .catch(error => console.error('Error fetching products:', error));
		
  },[])
  
  return (
  	<>
    	<h1>List of products</h1>
	    <div>
        <ul>
          {list.map((item)=>{ 
            return (
              <Product data={item} key={item.id}/>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default List;
