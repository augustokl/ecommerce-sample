import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';

import './styles.scss';

const CartIcon = () => {
  const dispatch = useDispatch();
  const itemCount = useSelector(selectCartItemsCount);

  const onClickCart = useCallback(() => {
    dispatch(toggleCartHidden());
  }, [dispatch]);

  return (
    <div className="cart-icon" onClick={onClickCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
