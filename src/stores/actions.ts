import {Dispatch} from 'redux';

import {
    LOAD_PUBLIC_PHOTOS
} from './actionTypes';

const loadPublicPhotos = () => ({type: LOAD_PUBLIC_PHOTOS});

export {
    loadPublicPhotos
};
