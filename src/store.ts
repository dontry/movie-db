import { Store, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: "root",
  storage
};

export function configureStore(initialState?: any): any {
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store: any = createStore(persistedReducer, initialState, composeWithDevTools(...enhancers));
  const persistor = persistStore(store);

  store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const nextReducer = require("./reducers");
      store.replaceReducer(nextReducer);
    });
  }

  return { store, persistor };
}
