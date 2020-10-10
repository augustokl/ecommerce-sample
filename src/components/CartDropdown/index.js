import React from 'react';
import { useSelector } from 'react-redux';
import CustomButton from '../CustomButton';

import './styles.scss';

const CartDropdown = () => {
  const { hidden } = useSelector(state => state.cart);

  return (
    <div className={`${hidden ? 'hidden ' : ''}cart-dropdown`}>
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
