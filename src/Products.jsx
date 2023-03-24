import { Helmet } from "react-helmet";
import TextButton from "./components/TextButton";
import Header from "./components/Header";
import ReturnNav from "./components/ReturnNav";


export const PRODUCTS_QUERY = gql`
{
    products{
        id
        name
        price
        images{
            url(transformation: {image: {resize: {fit: scale, height: 50, width: 50}}})
        }
        categories{
            name
        }
    }
}`


const Products = () => {

    
    const {loading, error, data} =  useQuery(PRODUCTS_QUERY)
       
    
    if(loading) return <p>...loading</p>
    if(error) return <p>an error occured {error}</p>

    return(
        <>
        {
            data && data.products.map(({id, name , price, images, categories}) => {
                const imageUrl = images.map(({url}) => url)
                const categoryName = categories.map(({name}) => name)
                return(
                    <div key={id}>
                                <p>{name}</p>
                                <img src={imageUrl} alt={name} />
                                <p>{categoryName}</p>
                    </div>
                )
            })
        }
        <ReturnNav />
        </>
    )
}

export default Products