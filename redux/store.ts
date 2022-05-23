import { createStore, applyMiddleware, Store, compose, Reducer, CombinedState, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import carReducer from './car/carReducer';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancers = compose;
if (typeof window !== 'undefined') {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const rootReducer = combineReducers({
  car: carReducer
})

const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store