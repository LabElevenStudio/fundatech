import {useShoppingCart} from 'use-shopping-cart'
import { useEffect } from 'react'



const Success = () => {
	const {clearCart} = useShoppingCart()

	useEffect(() => {
		clearCart()
	}, [])
	return(
		<main>
			<h2>Your payment was successfull, Thank you for your purchase</h2>
		</main>
		)
}


export default Success