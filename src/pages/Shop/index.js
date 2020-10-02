import React, { useState } from 'react';
import CollectionPreview from '../../components/CollectionPreview';

import SHOP_DATE from './shopData';

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATE);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collectionProps }) => (
        <CollectionPreview key={id} {...collectionProps} />
      ))}
    </div>
  );
};

export default Shop;
