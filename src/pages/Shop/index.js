import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/container';
import Collection from '../Collection/container';

import { useDispatch } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
