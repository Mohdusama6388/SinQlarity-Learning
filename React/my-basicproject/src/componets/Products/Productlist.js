import Productitem from "./Productitem";
import Styles from './Productitem.module.css'
function Productlist(props){
return <ul className={Styles.list}>
    {props.products.map((item)=>{
            return <Productitem key={item._id} id ={item._id} item={item}/>
           })}
    
</ul>
}
export default Productlist;