import { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import CartItem from './cartItem'
import Styles from '../styles/cart.module.scss'
import CheckoutButton from './CheckoutButton'
import Checkout from './Checkout'
import { useDisclosure } from '@chakra-ui/react'
import { 
	Modal, 
	ModalOverlay, 
	ModalHeader, 
	ModalBody, 
	ModalContent, 
	ModalCloseButton,
	Text
} from '@chakra-ui/react'




const OverlayOne = () => (
	<ModalOverlay
		bg='blackAlpha.300'
		backdropFilter='blur(10px) hue-rotate(90deg)'
	/>
)


const Cart = () => {
	
	const { cartCount, cartDetails } = useShoppingCart()
	const { isOpen, onOpen, onClose } = useDisclosure()

	const [overlay, setOverlay] = useState()


	

	return (
		//add slide in className logic here.
		<section className={Styles.cartContainer}>
			{
				cartCount && cartCount > 0 ? (
					<>
						{
							Object.values(cartDetails ?? {}).map((entry) => {
								return (
									<CartItem key={entry.id} item={entry} />
								)
							})
						}
						<span onClick={() => {
							setOverlay(<OverlayOne />)
							onOpen()
						}}>
							<CheckoutButton />
						</span>
					</>
				) : (<h2>Your cart is empty</h2>)
			}

			 <Modal  
        blockScrollOnMount={true} 
        closeOnOverlayClick={true} 
        closeOnEsc={true} 
        isOpen={isOpen} 
        onClose={onClose}
        motionPreset='slideInRight'
        isCentered
        size="full"
        >
        {overlay}
        <ModalContent p={8}>
        <ModalHeader ><Text fontSize={40}>Your Cart</Text></ModalHeader>
        <ModalCloseButton mt={10} mr={5}/>
        <ModalBody>
          <Checkout/>
        </ModalBody>
        </ModalContent>
        
      </Modal>
			
		</section>
	)
}


export default Cart