import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartHidden,
} from '../../redux/cart/cartSelectors';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import CartItem from '../CartItem';
import CustomButton from '../CustomButton';

import './styles.scss';

const CartDropdown = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const { hidden, cartItems } = useSelector(
    createStructuredSelector({
      hidden: selectCartHidden,
      cartItems: selectCartItems,
    })
  );

  const onClickCheckout = useCallback(() => {
    dispatch(toggleCartHidden());

    history.push('/checkout');
  }, [dispatch, history]);

  return (
    <div className={`${hidden ? 'hidden ' : ''}cart-dropdown`}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={onClickCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
