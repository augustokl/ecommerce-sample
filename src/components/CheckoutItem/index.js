import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cartActions';

import './styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const { name, imageUrl, price, quantity } = cartItem;

  const onClickRemove = useCallback(() => {
    dispatch(clearItemFromCart(cartItem));
  }, [cartItem, dispatch]);

  const onClickArrowIncrese = useCallback(() => {
    dispatch(addItem(cartItem));
  }, [cartItem, dispatch]);

  const onClickArrowDecrease = useCallback(() => {
    dispatch(removeItem(cartItem));
  }, [cartItem, dispatch]);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={onClickArrowDecrease}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={onClickArrowIncrese}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={onClickRemove}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
