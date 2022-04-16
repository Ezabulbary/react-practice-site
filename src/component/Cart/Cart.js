
import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    const { pairImage, name, price} = cart;

    return (
        <div>
            <div className="cart-item">
                <div>
                    <img
                        className='cart-item-image'
                        src={pairImage}
                        alt=""
                    />
                </div>
                <div className='product-info'>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;