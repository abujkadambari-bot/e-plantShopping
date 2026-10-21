import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    let total = 0;

    cart.forEach((item) => {
      total += parseFloat(String(item.cost).replace('$', '')) * item.quantity;
    });

    return total.toFixed(2);
  };

  const calculateTotalCost = (item) => {
    return (
      parseFloat(String(item.cost).replace('$', '')) * item.quantity
    ).toFixed(2);
  };

  const handleContinueShopping = () => {
    if (onContinueShopping) {
      onContinueShopping();
    }
  };

  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        })
      );
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{totalItems} items in your cart</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty 🌱</h2>
          <p>Discover beautiful plants for your home.</p>
          <button
            className="continue-shopping"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <h2 className="cart-total">
            Total Cart Amount: ${calculateTotalAmount()}
          </h2>

          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.name}>
                <img
                  className="cart-item-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-details">
                  <h2>{item.name}</h2>

                  <p className="cart-item-price">
                    ${parseFloat(String(item.cost).replace('$', '')).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                      onClick={() => handleDecrement(item)}
                      aria-label={`Decrease ${item.name} quantity`}
                    >
                      −
                    </button>

                    <span className="quantity">{item.quantity}</span>

                    <button
                      className="quantity-button"
                      onClick={() => handleIncrement(item)}
                      aria-label={`Increase ${item.name} quantity`}
                    >
                      +
                    </button>
                  </div>

                  <p className="item-subtotal">
                    Total: ${calculateTotalCost(item)}
                  </p>

                  <button
                    className="delete-button"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-actions">
            <button
              className="continue-shopping"
              onClick={handleContinueShopping}
            >
              Continue Shopping
            </button>

            <button
              className="checkout-button"
              onClick={handleCheckoutShopping}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;