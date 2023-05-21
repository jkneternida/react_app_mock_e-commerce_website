import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ProductCard = ({ product }) => {
    const { title, price, image } = product;
    const { dispatch } = useContext(CartContext);
    const [showDetails, setShowDetails ] = useState(false);

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: product });

    };

    const handleItemDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div>
            <img src={image} alt={title} style={{width: '100px'}} />
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleItemDetails}>
                {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                {showDetails && (
                    <ProductDetails  title={title} price={price} image={image}/>
                )}
        </div>
    );
};

    const ProductDetails = ({title, price, image}) => {

        return (
            <div>
            <p>Timeless, Simple. Functional, Comfortable, Durable, Practical. 
            Suitable both for everyday use and walks in the forest, and its simple functionality and durable material will make it a favorite for many years to come.
            </p>
            <imge src={image} alt={title} style={{width: '200px'}}/>
            </div>
        );
    };

export default ProductCard;
