import {
    FETCH_PICTURE_FAILURE,
    FETCH_PICTURE_REQUEST,
    FETCH_PICTURE_SUCCESS,
    FETCH_PICTURES_FAILURE,
    FETCH_PICTURES_REQUEST,
    FETCH_PICTURES_SUCCESS
} from "../actions/picturesActions";

const initialState = {
    pictures: [],
    picture: null,
    fetchLoading: false,
    singleLoading: false,
    fetchError: null,
};

const picturesReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case FETCH_PICTURE_REQUEST:
            return {...state, singleLoading: true};
        case FETCH_PICTURE_SUCCESS:
            return {...state, singleLoading: false, picture: actions.payload};
        case FETCH_PICTURE_FAILURE:
            return {...state, singleLoading: false, fetchError: actions.payload};

        case FETCH_PICTURES_REQUEST:
            return {...state, fetchLoading: true};
        case FETCH_PICTURES_SUCCESS:
            return {...state, fetchLoading: false, pictures: actions.payload};
        case FETCH_PICTURES_FAILURE:
            return {...state, fetchLoading: false, fetchError: actions.payload};
            
        default:
            return state;
    }
};

export default picturesReducer;