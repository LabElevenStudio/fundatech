import { useQuery, gql } from "@apollo/client";






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




const Product = () => {
    return(
        <section></section>
    )
}

export default Product