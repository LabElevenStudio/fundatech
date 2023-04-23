import Styles from '../styles/checkoutbutton.module.scss'
import {useShoppingCart} from 'use-shopping-cart'
import { useState } from 'react'
import Loader from './Loader'
import {useNavigate} from 'react-router-dom'



const CheckoutButton = () => {

	const [status, setStatus] = useState("idle")
	const {cartCount, totalPrice} = useShoppingCart()


<<<<<<< HEAD
	
=======
	
>>>>>>> payments


		/*if(cartCount > 0){
			setStatus("loading")
		}else{
			setStatus("no-items")
		} */


	return(
		<section>
			<section className={Styles.cartStatus}>
			{totalPrice && totalPrice < 1000 ?
			"You must have at least 1000 naira in your cart"
			: cartCount && cartCount > 20 ? 
			"You cannot have more than 20 items in your cart"
			: status === "redirect-error" ?
			"unable to redirect to paystack checkout page"
			: status === "no-items" ? "Please add some items to your cart" : null
			}
			</section>
			<button className={Styles.checkoutBtn} disabled={
				(totalPrice && totalPrice < 1000) ||
				(cartCount && cartCount > 20) ||
				status === "no-items" ? true : false
			}>
				{status !== "loading" ? "Proceed To Checkout" : <Loader sz="sm" />}
			</button>
		</section>
		)
}

export default CheckoutButton
