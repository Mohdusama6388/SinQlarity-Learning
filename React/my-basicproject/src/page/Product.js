import Productlist from "../componets/Products/Productlist";
import { useState } from "react";
import { useEffect } from "react";
function Product(){
    let [products,setProducts]=useState([]);
    let [isDataFetching,setIsDataFetching]=useState(true);
    useEffect(()=>{
        setIsDataFetching(true);
    fetch("http://localhost:3001/product")
    .then(response=>response.json())
    .then(responseData=>{
        setIsDataFetching(false);
        setProducts(responseData.data)
    })
    .catch(err=>console.log(err));
},[])

if(isDataFetching){
    return <div>
           Data is loading
    </div>
}
return <div>
    <Productlist products={products} />
</div>
}
export default Product;