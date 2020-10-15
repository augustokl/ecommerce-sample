import React from 'react';
import { useSelector } from 'react-redux';
import CollectionItem from '../../components/CollectionItem';
import { selectCollection } from '../../redux/shop/shopSelectors';

import './styles.scss';

const Collection = ({ match }) => {
  const { collectionId } = match.params;
  const collection = useSelector(selectCollection(collectionId));

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
