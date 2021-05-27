import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import allReducers from './reducers'

export default function configureStore(preloadedState) {

    /* 
        if needed any extra middlewares
        Recommended Sequence(Maybe):>> [middleware1,middleware2,thunkMiddleware]
    */
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    /* 
        if needed any custom enhancers
        Recommended Sequence(Maybe) :>> [middlewareEnhancer,enhancer1,enhancer2]
    */
    const enhancers = [middlewareEnhancer];
    const composedEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(...enhancers) :compose(...enhancers);

    const store = createStore(allReducers, preloadedState, composedEnhancers);

    return store;
}