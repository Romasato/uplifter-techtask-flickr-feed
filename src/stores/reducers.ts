import {IAppState} from '../ts-definitions/interfaces';

const initialState = {
    flickr: {
        publicPhotos: {},
        isPublicPhotosLoading: false
    }
};

const defaultReducer = (oldState: object = initialState, action: any): object => {
    const state = Object.assign({} as IAppState, oldState);

    switch(action.type) {
        case 'PUBLIC_PHOTOS_LOADING':
            state.flickr.isPublicPhotosLoading = true;
            break;
        case 'PUBLIC_PHOTOS_LOADED':
            state.flickr.publicPhotos = action.data;
            state.flickr.isPublicPhotosLoading = false;
            return state;
            break;
        default:
            return state;
    }

    return state;
};

export default defaultReducer;
