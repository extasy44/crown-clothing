import { takeLatest, call, put, all } from 'redux-saga/effects';

import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionSuccess, fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';


export function* fetchCollectionsAsync(){
  
    try{
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSanpshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionsMap))
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
};

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync);
};

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}