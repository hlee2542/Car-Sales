import {ADD_FEATURE, REMOVE_FEATURE} from './constants';

export const addFeature = (feature) => ({
    type: ADD_FEATURE,
    feature
});

export const removeFeature = (feature) => ({
    type: REMOVE_FEATURE,
    feature
});