import { createStore } from 'redux';
import reducers from '../reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducers, devTools);
console.log(store);
export default store;
