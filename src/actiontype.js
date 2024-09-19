// actionTypes.js
export const FETCH_PHOTOS_REQUEST = 'FETCH_PHOTOS_REQUEST';
export const FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS';
export const FETCH_PHOTOS_FAILURE = 'FETCH_PHOTOS_FAILURE';

// actions.js
import { fetchPhotos } from './api';
import { FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from './actionTypes';

export const fetchPhotosRequest = () => ({
  type: FETCH_PHOTOS_REQUEST,
});

export const fetchPhotosSuccess = (photos) => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: photos,
});

export const fetchPhotosFailure = (error) => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: error,
});

export const fetchPhotosData = () => {
  return async (dispatch) => {
    dispatch(fetchPhotosRequest());
    try {
      const photos = await fetchPhotos();
      dispatch(fetchPhotosSuccess(photos));
    } catch (error) {
      dispatch(fetchPhotosFailure(error.message));
    }
  };
};
