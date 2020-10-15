import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';
import CustomButton from '../CustomButton';

import './styles.scss';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();

  const onClickAddToCart = useCallback(() => {
    dispatch(addItem(item));
  }, [dispatch, item]);

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
      </div>
      <CustomButton inverted onClick={onClickAddToCart}>
        Add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
