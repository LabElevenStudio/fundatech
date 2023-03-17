import { Helmet } from "react-helmet";
import TextButton from "./components/TextButton";
import Header from "./components/Header";
import ReturnNav from "./components/ReturnNav";
import { useQuery, gql } from "@apollo/client";
import {useEffect, useState} from 'react'


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
       
    


    return(
        <>
        {
            data && data.products.map(({id, name , price, images, categories}) => {
                const imageUrl = images.map(({url}) => url)
                const categoryName = categories.map(({name}) => name)
                return(
                    <div key={id}>
                        {categoryName === 'T-shirts' ? (
                            <>
                                <p>{name}</p>
                                <img src={imageUrl} alt={name} />
                                <p>{categoryName}</p>
                            </>
                        ): null}
                    </div>
                )
            })
        }
        </>
    )
}

export default Products