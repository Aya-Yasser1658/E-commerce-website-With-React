import React from 'react';

import { useSelector } from 'react-redux';

const Cart = () => {
const cartItems = useSelector((state) => state.handelCart);

return (
    <div className="container my-5">
    <h2 className="text-center mb-5">Shopping Cart</h2>
    <div className="row">
        {cartItems.length === 0 ? (
        <h3 className="text-center">Your Cart is Empty</h3>
        ) : (
        cartItems.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
            <div className="card">
                <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                height="200px"
                />
                <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">
                    {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}
                </p>
                <button className="btn btn-danger">Remove</button>
                </div>
            </div>
            </div>
        ))
        )}
    </div>
    </div>
);
};

export default Cart;
