import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (selectedProduct) => {
        const newCarts = [...cart, selectedProduct];
        setCart(newCarts);
    }

    const clickDeleteToCart = (selectedProduct) => {
        console.log(selectedProduct)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products 
                        key={product.id}
                        data={product}
                        handleAddToCart={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <div className="top-bar">
                    <h3>Order Summary</h3>
                    <FontAwesomeIcon className='delete' onClick={() => clickDeleteToCart} icon={faTrash} />
                </div>
                {
                    cart.map(item => <Cart
                    key={item.id}
                    cart={item}
                    ></Cart>)
                }
                <div className="bottom-bar">
                    <button>All Clear</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;