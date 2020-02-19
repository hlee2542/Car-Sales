import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';
import {mainReducer} from './redux/reducers';
import {addFeature, removeFeature} from './redux/actionCreators';

const store = createStore(mainReducer);
const mapStateToProps = state => ({
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
});
const Container = connect(mapStateToProps, {addFeature, removeFeature})(App);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><Container /></Provider>, rootElement);
