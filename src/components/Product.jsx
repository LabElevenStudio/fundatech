import { useQuery, gql } from '@apollo/client'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Styles from '../styles/productcat.module.scss'




const ProductCategory = ({prod}) => {


    const { id, name, slug, description, price } = prod
            

    return (
        <>
            <Link to={`/product/${slug}`}>
                <h3>{name}</h3>
                <p>{description}</p>
                <small>{price}</small>
           </Link>
        </>
    )
}


export default ProductCategory