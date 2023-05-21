import React, {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import {FaShoppingCart} from 'react-icons/fa';
import { CartContext } from './CartContext';

const HomePage = () => {
    const {cart} = useContext(CartContext);
    const [ products, setProducts] = useState([]);
    const [ searchWord, setSearchWord ] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, []);

    const handleSearch = (e) => {
        setSearchWord(e.target.value);
    };

    const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchWord.toLowerCase())
    );

    return (
            <div className="home-page">
                <div className="header">
                <Link to="/cart" className="cart-icon">
                    <FaShoppingCart size ={24}/>
                    {cart.length > 0 && <span className="cart-count"> {cart.length}</span>}
                    </Link>
                    </div>
                    <h1>E-Commerce App</h1>
                <div className="searh-bar">
                <input type="text" placeholder="Search Products" onChange={handleSearch}/>
                </div>
              <ul className="product-list">
                {filteredProducts.map((product) => (
                <li key={product.id}>
                    <ProductCard product = {product}/>
                    </li>
                ))}
              </ul>
            </div>

    );

};

export default HomePage;