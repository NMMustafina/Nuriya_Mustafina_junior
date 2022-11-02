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

export const fetchPictures = () => {
    return async dispatch => {
        try {
            dispatch(fetchPicturesRequest());

            const response = await axiosApi('/assets?format=json');

            dispatch(fetchPicturesSuccess(response.data));
        } catch (e) {
            dispatch(fetchPicturesFailure(e.message));
        }
    }
};

export const fetchPicture = id => {
    return async dispatch => {
        try {
            dispatch(fetchPictureRequest());

            const response = await axiosApi('/pictures/' + id);

            dispatch(fetchPictureSuccess(response.data));
        } catch (e) {
            dispatch(fetchPictureFailure(e.message));
        }
    }
};