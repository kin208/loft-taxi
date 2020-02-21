import { createStore, compose, applyMiddleware } from 'redux';
import { myMid } from './modules/user';
import rootReducer from './modules'; 
import { loadState, saveState } from './localStorage';

const persistedState = loadState();  

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    persistedState, 
    compose(
      applyMiddleware(myMid), 
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : noop => noop,
    ),
    
  );

  store.subscribe(() => {
    saveState({
      user: store.getState().user
    });
  });

  return store;
};

export default createAppStore;