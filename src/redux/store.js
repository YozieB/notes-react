import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk));
const initialState = {};
const store = createStore(rootReducer(), initialState, composeEnhancers);

export default store;
