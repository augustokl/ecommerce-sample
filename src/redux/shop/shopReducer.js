import SHOP_DATE from '../../pages/Shop/shopData';
import shopActionTypes from './shopTypes';

const INITIAL_STATE = {
  collections: SHOP_DATE,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
