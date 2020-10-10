import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cartActions';

import './styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();

  const onClickCart = useCallback(() => {
    dispatch(toggleCartHidden());
  }, [dispatch]);

  return (
    <div className="cart-icon" onClick={onClickCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
