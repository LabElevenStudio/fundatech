import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import CartItem from './cartItem'
import Styles from '../styles/cart.module.scss'
import CheckoutButton from './CheckoutButton'



const Cart = () => {
	
	const { cartCount, cartDetails } = useShoppingCart()

	return (
		//add slide in className logic here.
		<section className={Styles.cartContainer}>
			{
				cartCount && cartCount > 0 ? (
					<>
						{
							Object.values(cartDetails ?? {}).map((entry) => {
								return(
									<CartItem key={entry.id} item={entry} />
								)
							})
						}
						<CheckoutButton />
					</>
				) : (<h2>Your cart is empty</h2>)
			}
		</section>
	)
}


export default Cart