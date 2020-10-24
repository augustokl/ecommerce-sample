import { all } from 'redux-saga/effects';

import shop from './shop/shopSaga';
import user from './user/userSaga';

export default function* rootSagas() {
  return yield all([shop, user]);
}
