import { useParams } from "react-router-dom"
import { fetchProduct } from "../lib/sanity/productServices"
import {useEffect, useState} from 'react'

export default function ProductPage() {
    //UseParams for å hente parameter i URL (product-slug)
    const {slug} = useParams()

    //gjøre klar en state får å lagre retunert data fra Sanity
    const [product, setProduct] = useState(null)

    //Lese opp promise, og få ut dadta fra snity
    const getProduct = async (slug) => {
        const data = await fetchProduct(slug)
        setProduct(data[0])
    }

    //Kjør gett product når komponente lastes
    useEffect(() => {
        getProduct(slug)
    }, [slug])

    //Test om vi har fått innhold:
    console.log(product)

    return (
        <>
        <h1>{product?.product_title}</h1>
        <img style={{maxWidth: "400px"}} alt={`Productbilde av ${product?.product_title}`} src={product?.imageURL}></img>
        <p>Kategori: {product?.catName}</p>
        <p>Pris: {product?.price}</p>
        </>
    )
}