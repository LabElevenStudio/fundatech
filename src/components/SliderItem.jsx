import Styles from '../styles/slideritem.module.scss'

const SliderItem = ({image}) => {
	
	return(
				<section key={`image-${image.id}`} className={Styles.slideItem}>
					<img src={image.src} alt="" />
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis harum consequuntur, dolor ratione error, adipisci!</p>
				</section>
		)
}


export default SliderItem