import Flickty from 'react-flickity-component'
import '../styles/flickity.css'


const flickityOptions = {
	initialIndex: 2
}


const Carousel = ({children}) => {
	
	return(
		
		<Flickity
		 className={'carousel'}
		 elementType={'div'}
		 options={flickityOptions}
		 disableImagesLoaded={false}
		 reloadOnUpdate
		 static
		>
			{children}
		</Flickity>
		
	)
}

export default Carousel