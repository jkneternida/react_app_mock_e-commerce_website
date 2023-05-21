import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import {Link } from 'react-router-dom'


const ShoppingCartPage = () => {
    const { cart, dispatch } = useContext(CartContext);
   

    const handleRemoveFromCart = (id) => {
        dispatch({type: 'REMOVE_FROM_CART', payload: id});
    };
    
    const handleIncreaseQuantity = (id) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: id});

    };

    const handleDecreaseQuantity = (id) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: id});
        
    };

    const handleClearCart = () => {
        dispatch({type: 'CLEAR_CART'});

    };

    if (cart.length === 0 ){
        return  <div>
           <p className="empty-cart">Your cart is empty.</p>
            <Link to="/"> Go back to Homepage</Link>
            </div>
        
    }

    return (
        <div className="shopping-cart-page">
            <h2>Shopping Cart</h2>
            <Link to="/"> Go back to Homepage</Link>
            <ul>
                {cart.map((item) => (
                    <li key ={item.id}>
                    <h3 className="item-title">{item.title}</h3>
                    <p className="item-price">Price: ${item.price}</p>
                    <p className="item-quantity">Quantity: {item.quantity}</p>
                    <button onClick={() => handleRemoveFromCart(item.id)}> Remove from Cart</button>
                    <button onClick={() => handleIncreaseQuantity(item.id)}> + </button>
                    <button onClick={() => handleDecreaseQuantity(item.id)}> - </button>
                    </li>
                    
                    ))}
            </ul>
            <button onClick={handleClearCart}>Clear Cart</button>
        </div>
    );
};

export default ShoppingCartPage;



