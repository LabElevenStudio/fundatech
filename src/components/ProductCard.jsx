import { Link } from 'react-router-dom'
import Styles from '../styles/productcard.module.scss'




const ProductCategory = ({prod}) => {


    const { id, name, slug, description, price } = prod
            

    return (
        <section className={Styles.prodCard}>
                <h3>{name}</h3>
                <p>{description}</p>
                <small><span>NGN</span> {price}</small>
        </section>
    )
}


export default ProductCategory