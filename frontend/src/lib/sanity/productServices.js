import {client} from './client'

//Service for å hente alle produkter
export const fetchAllProducts = async () => {
    const data = await client.fetch(`*[_type == "products"]`)
    return data
}

//Service for å hente et nestemt produkt,, basert på slug
export const fetchProduct = async (slug) => {
    const data = await client.fetch(`*[_type == "products" && slug.current == $slug]{product_title, price, quantity, "imageURL":product_image.asset->url, "catName":category->category_title}`
    , {slug}) //Bare $ pga det er inne i en grokk spørring
    return data
}