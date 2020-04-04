import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

////////////////////////////// WORKER SAGAS /////////////////////////

function* runOnce() {
  console.log('run once! (on app initialization)');
}

function* addTeam(action) {
  console.log('add team requested');
  console.log('action', action);
}




/////////////////////////////// WATCHERS //////////////////////////////////

function* addTeamWatcher() {
  yield takeEvery('ADD_NEW_TEAM', addTeam);
}




///////////// root export /////////////

export default function* rootSaga() {
  yield all([runOnce(), addTeamWatcher()]);
}


// hey boy, why so down, smokin all your teeth brown
// its gonna be good