import { all } from 'redux-saga/effects';

import shop from './shop/shopSaga';

export default function* rootSagas() {
  return yield all([shop]);
}
