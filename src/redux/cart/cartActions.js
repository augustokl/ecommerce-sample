import { cartActionsTypes } from './cartTypes';

export const toggleCartHidden = () => ({
  type: cartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
  type: cartActionsTypes.ADD_ITEM,
  payload: item,
});
