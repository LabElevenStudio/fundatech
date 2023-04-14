
import Styles from '../styles/productcard.module.scss'





const ProductCategory = ({prod}) => {

    // const { user, login, authReady } = useContext(AuthContext);
    const { name, description, price} = prod
            

    return (
      <section className={Styles.prodCard}>
        <h3>{name}</h3>
        <p>{description}</p>
        <small>
          <span>NGN</span> {price}
        </small>
      </section>
    );
}


export default ProductCategory