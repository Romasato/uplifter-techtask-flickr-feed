import {put, takeEvery, all, delay} from 'redux-saga/effects';
import axios from 'axios';

const CONFIG = require('../../config/envSettings');

function* loadPublicPhotos() {
    yield put({type: 'PUBLIC_PHOTOS_LOADING'});
    const response = yield axios.get('http://localhost:3000/api/flickr/publicPhotos');
    yield delay(1000);
    yield put({type: 'PUBLIC_PHOTOS_LOADED', data: response.data});
}

function* watchPublicPhotosRequest() {
    yield takeEvery('LOAD_PUBLIC_PHOTOS', loadPublicPhotos);
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
function* rootSaga() {
    yield all([
        watchPublicPhotosRequest()
    ])
}

export {rootSaga}
