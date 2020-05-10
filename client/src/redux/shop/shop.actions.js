import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils';

export const fatchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START
});

export const fetchCollectionSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: errorMessage
});

export const fetchCollectionStartAync = () =>{
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fatchCollectionsStart);

        collectionRef.get().then((snapshot) => {
          const collectionsMap = convertCollectionsSanpshotToMap(snapshot);
          dispatch(fetchCollectionSuccess(collectionsMap));  
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
    }
};

