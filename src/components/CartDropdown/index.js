import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../CartItem';
import CustomButton from '../CustomButton';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './styles.scss';

const CartDropdown = () => {
  const { hidden, cartItems } = useSelector(state => ({
    hidden: state.cart.hidden,
    cartItems: selectCartItems(state),
  }));

  return (
    <div className={`${hidden ? 'hidden ' : ''}cart-dropdown`}>
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
