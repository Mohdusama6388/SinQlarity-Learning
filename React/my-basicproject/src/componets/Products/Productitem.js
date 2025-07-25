import Styles from './Productitem.module.css'
import Customwrapper from '../layouts/Customwrapper';
import FavouriteContext from '../../Store/ContextFavourite';
import { useContext } from 'react';
function Productitem(props) {
    const favouriteContext = useContext(FavouriteContext);
    const isFavourite = favouriteContext.isFavouriteItem(props.item._id);
    const toggleFavourite = () => {
        if (isFavourite) {
            favouriteContext.removeFavoriteItem(props.item._id)
            console.log("remove");
        } else {
            favouriteContext.addFavouriteItem({ ...props.item });
            console.log("added")
        }
    }
    return <li key={props.item._id}>
        <Customwrapper >
            <div className={Styles.image}>
                <img src={props.item.image} alt="No" />
            </div>
            <div className={Styles.Content}>
                <h2>{props.item.product_name}</h2>
                <p>{props.item.description}</p>
                <h4>{props.item.price}</h4>
            </div>

            <div className={Styles.btn}>
                <button>Purchase</button>
            </div>
            <div>
                <button className={isFavourite?Styles.heartFvrt:Styles.heartUnfvrt} onClick={toggleFavourite}></button>
            </div>
        </Customwrapper>
    </li>;
}
export default Productitem;
