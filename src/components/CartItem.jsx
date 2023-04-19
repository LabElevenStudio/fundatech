import Styles from '../styles/cartitem.module.scss'
import { useShoppingCart } from 'use-shopping-cart'
import { FaTrashAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'



const CartItem = ({item}) => {

	const {removeItem} = useShoppingCart()

	const {name, price, bannerImage} = item[0]

	function removeItemFromCart(){
		removeItem(item.id)
	}


	return(
		<section className={Styles.wrapper}>
			<button id={Styles.deleteItem} onClick={() => removeItemFromCart()}>
				<IconContext.Provider value={{size: '1.3rem', className: `${Styles.delete}`}} >
					<FaTrashAlt />
				</IconContext.Provider>
			</button>
			<section>
				<img id={Styles.itemImage} src={bannerImage.url} alt={name} />
				<h2>Product: {name}</h2>
				<p id={Styles.quant}>Quantity: {item.quantity}</p>
				<p id={Styles.price}>Base price: <span style={{color: "forestgreen" }} >NGN</span> {price}</p>
			</section>
		</section>
		)
}


export default CartItem