import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddCartItem,
  AddQuantity,
  SubtractQuantity,
  DeleteCartItem,
  HandleTotalprice,
} from "../slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  // console.log(cart.products);
  console.log(cart.carts);

  useEffect(() => {
    // console.log("useEffect() called");
    dispatch(HandleTotalprice());
  }, [cart.carts]);

  return (
    <>
      <section className="product-container">
        <h1 className="product-heading">Products</h1>
        <div className="product-list">
          {cart.products.map((product, index) => {
            return (
              <div className="product" key={product.id}>
                <img src={product.image} alt="sample name" />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <button onClick={() => dispatch(AddCartItem(product.id))}>
                  Add to cart
                </button>
              </div>
            );
          })}
        </div>
      </section>
      <hr />

      <section className="cart">
        <h1 className="cart-heading">
          Cart (Total Price is {cart.totalPrice} Baht)
        </h1>
        <div className="cart-item-list">
          {cart.carts.map((product, index) => {
            // console.log(console.log("this is product", product));
            return (
              <div className="cart-item" key={product.id}>
                <h1>Item name: {product.name}</h1>
                <h2>Price: {product.price} Baht</h2>
                <h2>Quantity: {product.quantity}</h2>
                <button
                  className="delete-button"
                  onClick={() => dispatch(DeleteCartItem({ id: product.id }))}
                >
                  x
                </button>
                <div className="quantity-actions">
                  <button
                    className="add-quantity"
                    onClick={() => dispatch(AddQuantity({ id: product.id }))}
                  >
                    +
                  </button>
                  <button
                    className="subtract-quantity"
                    onClick={() =>
                      dispatch(SubtractQuantity({ id: product.id }))
                    }
                  >
                    -
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Cart;
