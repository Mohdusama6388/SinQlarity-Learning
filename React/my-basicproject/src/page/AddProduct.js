import AddProductForm from "../componets/Products/AddProductForm";
import { useNavigate } from "react-router-dom";
function AddProduct(){
    const navigate=useNavigate();
    function addProductHandle(newProduct){
        fetch("http://localhost:3001/product",{
            method:"POST",
            body:JSON.stringify(newProduct),
            headers:{
                'Content-Type':'application/json'
            }

        }).then(response=>navigate("/",{replace:true}))
        .catch(err=>console.log(err));

    }
    return <AddProductForm addProductHandle={addProductHandle}/>
}
export default AddProduct;