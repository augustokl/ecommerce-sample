import React from 'react';
import { useSelector } from 'react-redux';
import { selectCollections } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview';

import './styles.scss';

const CollectionsOverview = () => {
  const collections = useSelector(selectCollections);

  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default CollectionsOverview;
