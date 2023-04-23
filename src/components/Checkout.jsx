import Styles from '../styles/checkout.module.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {useShoppingCart} from 'use-shopping-cart'
import UsingFlw from './UsingFlw'



const Checkout = () => {


	const [email, setEmail] = useState("")
	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")
	const navigate = useNavigate()
	const { cartDetails, totalPrice } = useShoppingCart()
	const amount = totalPrice



	return (
		<main className={Styles.checkoutWrapper}>
			<section className={Styles.items} >
				{
					Object.values(cartDetails ?? {}).map((entry) => {
						return (
							<section id={Styles.item} key={entry.id}>
								<img src={entry.bannerImage.url} alt={entry.name} />
								<h3>{entry.name}</h3>
								<p>{entry.formattedValue}</p>
							</section>
						)
					})
				}
			</section>
			<section id={Styles.total}>
				<p>You are paying: <span>NGN {totalPrice}</span> </p>
			</section>
			<section className={Styles.formWrapper} >
				<form >
					<div className={Styles.formControl}>
						<label htmlFor="name">Name<span>*</span>:</label>
						<input type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required/>
					</div>
					<div className={Styles.formControl}>
						<label htmlFor="email">Email<span>*</span>:</label>
						<input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address" required/>
					</div>
					<div className={Styles.formControl}>
						<label htmlFor="phone">Phone<span>*</span>:</label>
						<input type="number" id="phone" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Enter your phone number" required/>
					</div>

				</form>

				<UsingFlw email={email} phone={phone} name={name} amount={amount} />
				<small>* = required</small>
			</section>
		</main>
		
	)
}



export default Checkout