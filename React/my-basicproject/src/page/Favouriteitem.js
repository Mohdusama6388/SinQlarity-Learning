import Productlist from "../componets/Products/Productlist";
import FavouriteContext from '../Store/ContextFavourite';
import { useContext } from 'react';
function FavouriteItem(){
     const favouriteContext=useContext(FavouriteContext);
     return <div>
        <h1>My favourite items</h1>
    <Productlist products={favouriteContext.favouriteItems} />
    </div>

}
export default FavouriteItem;