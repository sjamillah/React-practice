const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 1200,
        availability: "In stock"
    }
    return <div>
        <p>The product name is: {product.name}</p>
        <p>The product price is: ${product.price}</p>
        <p>The product availability is: {product.availability}</p>
    </div>
}

export default ProductInfo;