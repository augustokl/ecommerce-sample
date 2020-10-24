import { takeLatest, put, call, all } from 'redux-saga/effects';
import {
  auth,
  goooglProvider,
  createUserProfileDocument,
} from '../../firebase/firebaseUtils';

import {
  emailSignInFailure,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
} from './userActions';
import { userActionTypes } from './userTypes';

function* onGoogleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(goooglProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

function* onEmailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();

    yield put(
      emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export default all([
  takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, onGoogleSignInAsync),
  takeLatest(userActionTypes.EMAIL_SIGN_IN_START, onEmailSignInAsync),
]);
