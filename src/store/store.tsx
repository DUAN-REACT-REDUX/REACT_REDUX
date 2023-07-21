import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ProductReducer from '../reducer/product'
import thunk from 'redux-thunk';
import CategoryReducer from '../reducer/category';

const composeEnhancers =
    typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
        })
        : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);
const rootReducer = combineReducers({
    products: ProductReducer,
    category: CategoryReducer
})
const store = createStore(rootReducer, enhancer)
export default store