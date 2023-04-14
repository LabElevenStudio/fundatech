import Styles from '../styles/additembtn.module.scss'



const AddItem = ({id, price, img, name, slug}) => {
   return (
      <button
        className={`snipcart-add-item ${Styles.addToCart}`}
        data-item-id={id}
        data-item-price={price}
        data-item-image={img}
        data-item-name={name}
        data-item-url={`/product/${slug}`}
      >
        Add To Cart
      </button>
    );
}

export default AddItem