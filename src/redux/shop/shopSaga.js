import { takeEvery, all, put, call } from 'redux-saga/effects';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebaseUtils';
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from './shopActions';

import ShopActionTypes from './shopTypes';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export default all([
  takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync),
]);
