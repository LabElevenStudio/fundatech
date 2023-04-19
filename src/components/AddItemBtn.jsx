import Styles from '../styles/additembtn.module.scss'



const AddItem = () => {
   return (
      <button
        className={`${Styles.addToCart}`}
      >
        Add To Cart
      </button>
    );
}

export default AddItem