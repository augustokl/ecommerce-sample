import React from 'react';
import CollectionItem from '../CollectionItem';

import './styles.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...propsItems }) => (
            <CollectionItem key={id} {...propsItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;