
import Styles from '../styles/productcard.module.scss'





const ProductCategory = ({prod}) => {

    // const { user, login, authReady } = useContext(AuthContext);
    const { name } = prod
            

    return (
      <section className={Styles.prodCard}>
        <h3>{name}</h3>
      </section>
    );
}


export default ProductCategory