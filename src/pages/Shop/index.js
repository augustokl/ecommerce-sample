import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview';
import Collection from '../Collection';

import { useDispatch, useSelector } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';
import WithSpinner from '../../components/WithSpinner';
import { selectCollectionFetching } from '../../redux/shop/shopSelectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

const Shop = ({ match }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectCollectionFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
};

export default Shop;
