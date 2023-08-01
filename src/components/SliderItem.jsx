import Styles from '../styles/slideritem.module.scss'

const SliderItem = ({image}) => {
	
	return(
				<section  className={Styles.slideItem}>
					<img src={image.src} alt="" />
					<p>{image.text}</p>
				</section>
		)
}


export default SliderItem