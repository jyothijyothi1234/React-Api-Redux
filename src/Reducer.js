import { FETCH_PHOTOS_REQUEST, FETCH_PHOTOS_SUCCESS, FETCH_PHOTOS_FAILURE } from './actiontype';

const initialState = {
  photos: [],
  loading: false,
  error: null,
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, loading: false, error: null };
    case FETCH_PHOTOS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default photoReducer;
