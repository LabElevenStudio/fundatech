import Styles from '../styles/slider.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import SliderItem from './SliderItem'




const ImgSlider = ({ images }) => {
	
	const [activeIndex, setActiveIndex] = useState(0);
	
	const next = () => setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
	
	const prev = () => setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))

    return (
        <main className={Styles['carousel-container']}>
				<section className={Styles.slider} style={{transform: `translateX(-${activeIndex * 100}%)`}}>
				{images.map((image) => {
					return(
						<SliderItem image={image} />
						)
					})
				}
				</section>
				<button className={Styles.prev} onClick={prev}>
						<FontAwesomeIcon icon={faArrowCircleLeft} size="lg"/>
				</button>
				
				<button className={Styles.next} onClick={next}>
						<FontAwesomeIcon icon={faArrowCircleRight} size="lg" />
				</button>
			</main>
    )
}


export default ImgSlider