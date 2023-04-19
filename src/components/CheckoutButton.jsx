import Styles from '../styles/checkoutbutton.module.scss'
import {useShoppingCart} from 'use-shopping-cart'
import { useState, useEffect, useContext } from 'react'
//authentication context imports
import AuthContext from "../stores/AuthContext"
import {usePaystackPayment} from "react-paystack"
import Loader from './Loader'
import {useNavigate} from 'react-router-dom'



const CheckoutButton = () => {

	const [status, setStatus] = useState("idle")
	const {redirectToCheckout, cartCount, totalPrice} = useShoppingCart()
	//use this to get the user email that paystack needs
	const { user } = useContext(AuthContext);

	const config = {
		reference: (new Date()).getTime().toString(),
		email: user.email,
		amount: totalPrice,
		publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC
	}

	

	function onSuccess(reference){
		console.log(reference)
	}

	function onClose() {
		console.log("closed")
	}

	const initializePayment = usePaystackPayment(config)

	function handleClick(event){
		if(cartCount > 0){
			setStatus("loading")
			try{	
				//add paystack redirect logic here
				const result = initializePayment(onSuccess, onClose)
				if(result?.error) {
					console.error(result)
					setStatus("redirect-error")
				}
			}catch(error){
				console.error(error)
				setStatus("redirect-error")
			}
		}else{
			setStatus("no-items")
		}
	}

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
			<button onClick={handleClick} className={Styles.checkoutBtn} disabled={
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
