import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/CollectionsOverview';
import Collection from '../Collection';

import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';
import { useDispatch } from 'react-redux';
import { updateCollections } from '../../redux/shop/shopActions';

const Shop = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    const unsubscribeFrimSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = await convertCollectionsSnapshotToMap(snapshot);

      dispatch(updateCollections(collectionsMap));
    });
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
