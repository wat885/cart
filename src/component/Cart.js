import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddCartItem } from "../slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const dispatch = useDispatch();

  // console.log(cart.products);

  return (
    <>
      <section className="product-container">
        <h1 className="product-heading">Products</h1>
        <div className="product-list">
          {cart.products.map((product, index) => {
            // console.log(product);
            if (index < 5) {
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
            }
          })}
        </div>
      </section>
      <hr />

      <section className="cart">
        <h1 className="cart-heading">Cart (Total Price is x Baht)</h1>
        <div className="cart-item-list">
          <div className="cart-item">
            <h1>Item name: Fond - Neutral</h1>
            <h2>Price: 160 Baht</h2>
            <h2>Quantity: 2</h2>
            <button className="delete-button">x</button>
            <div className="quantity-actions">
              <button className="add-quantity">+</button>
              <button className="subtract-quantity">-</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
