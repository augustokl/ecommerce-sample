import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  auth,
  goooglProvider,
  createUserProfileDocument,
} from '../../firebase/firebaseUtils';

import { signInSuccess, signInFailure } from './userActions';
import { userActionTypes } from './userTypes';

function* getSnapshotFromUserAuth(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapshot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onGoogleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(goooglProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* onEmailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export default all([
  takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignInAsync),
  takeLatest(userActionTypes.EMAIL_SIGN_IN_START, onEmailSignInAsync),
]);
