import {ADD_FEATURE, REMOVE_FEATURE} from './constants'

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE:
            return {
                additionalPrice: state.additionalPrice + action.feature.price,
                car: {
                    price: state.price + action.feature.price,
                    name: state.name,
                    image: state.image,
                    features: state.features.concat(action.feature)
                },
                additionalFeatures: state.additionalFeatures.filter(entry => entry.id !== action.feature.id)
            };
        case REMOVE_FEATURE:
            return {
                additionalPrice: state.additionalPrice - action.feature.price,
                car: {
                    price: state.price - action.feature.price,
                    name: state.name,
                    image: state.image,
                    features: state.features.filter(entry => entry.id !== action.feature.id)
                },
                additionalFeatures: state.additionalFeatures.concat(action.feature)
            };
        default:
            return state;
    }
}