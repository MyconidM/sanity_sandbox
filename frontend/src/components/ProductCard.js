import { Link } from 'react-router-dom'

const ProductCard = ({productInfo}) => {

    console.log(productInfo)
    return (
        <article>
            <h2>{productInfo?.product_title}</h2>
            <p>Price: {productInfo?.price}</p>
            <Link to={productInfo?.slug?.current}>Les mer</Link>
            
        </article>
    )
}

export default ProductCard