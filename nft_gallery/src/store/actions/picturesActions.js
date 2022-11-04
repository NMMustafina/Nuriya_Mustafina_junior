import axiosApi from "../../axiosApi";

export const FETCH_PICTURES_REQUEST = 'FETCH_PICTURES_REQUEST';
export const FETCH_PICTURES_SUCCESS = 'FETCH_PICTURES_SUCCESS';
export const FETCH_PICTURES_FAILURE = 'FETCH_PICTURES_FAILURE';

export const FETCH_PICTURE_REQUEST = 'FETCH_PICTURE_REQUEST';
export const FETCH_PICTURE_SUCCESS = 'FETCH_PICTURE_SUCCESS';
export const FETCH_PICTURE_FAILURE = 'FETCH_PICTURE_FAILURE';

const fetchPicturesRequest = () => ({type: FETCH_PICTURES_REQUEST});
const fetchPicturesSuccess = pictures => ({type: FETCH_PICTURES_SUCCESS, payload: pictures});
const fetchPicturesFailure = error => ({type: FETCH_PICTURES_FAILURE, payload: error});

const fetchPictureRequest = () => ({type: FETCH_PICTURE_REQUEST});
const fetchPictureSuccess = picture => ({type: FETCH_PICTURE_SUCCESS, payload: picture});
const fetchPictureFailure = error => ({type: FETCH_PICTURE_FAILURE, payload: error});

export const fetchPictures = (query) => {
    return async dispatch => {
        try {
            dispatch(fetchPicturesRequest());

            const response = await axiosApi('/assets?' + query);

            dispatch(fetchPicturesSuccess(response.data));
        } catch (e) {
            dispatch(fetchPicturesFailure(e.message));
        }
    }
};

export const fetchPicture = (address, tokenId) => {
    return async dispatch => {
        try {
            dispatch(fetchPictureRequest());
            const response = await axiosApi(`/asset/${address}/${tokenId}`);

            dispatch(fetchPictureSuccess(response.data));
        } catch (e) {
            dispatch(fetchPictureFailure(e.message));
        }
    }
};