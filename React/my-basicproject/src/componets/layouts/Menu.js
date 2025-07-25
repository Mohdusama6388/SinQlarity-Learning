import { Link } from "react-router-dom";
import Mainmenustyle from './Menu.module.css'
import FavouriteContext from '../../Store/ContextFavourite';
import { useContext } from 'react';

function Menu(){
    const favouriteContext=useContext(FavouriteContext);
    const totalFavouriteitems=favouriteContext.favouriteItems.length;
    return <header className={Mainmenustyle.header}>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/product/Add">AddProduct</Link></li>
                <li className={Mainmenustyle.fovouriteCount}><Link to="/product/favourite">{totalFavouriteitems}</Link></li>


            </ul>
        </nav>
        
    </header>
}
export default Menu;