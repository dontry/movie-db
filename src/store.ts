import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
const sagaMiddleware = createSagaMiddleware();


export function configureStore(initialState?: any): any {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store: any = createStore(rootReducer, initialState, composeWithDevTools(...enhancers));

  store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
