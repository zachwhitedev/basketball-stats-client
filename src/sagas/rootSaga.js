import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

////////////////////////////// WORKER SAGAS /////////////////////////

function* addTeam(action) {
       console.log('add team requested');
       console.log('action', action)
 }


/////////////////////////////// WATCHERS //////////////////////////////////

 function* rootSaga() {
   yield takeEvery('ADD_NEW_TEAM', addTeam);
 }
 
 export default rootSaga;