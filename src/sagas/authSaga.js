import {put, takeLatest, call} from 'redux-saga/effects';
import {fetchUsers} from '_services/auth/usersService';

function* AuthSaga() {
  try {
    const users = yield call(fetchUsers);
    console.log('users', users);
    // yield put({type: 'TEST_AUTH_INITIATED'});
    //call API and fetch data
    yield put({type: 'TEST_AUTH_SUCCESS', payload: users});
  } catch {
    yield put({type: 'TEST_AUTH_FAIL', payload: null});
  }
}

export default function* AuthActionWatcher() {
  yield takeLatest('TEST_AUTH', AuthSaga);
}
