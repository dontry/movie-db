import { Store, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";

export function configureStore(initialState?: any): Store<any> {
    let middleware = applyMiddleware();

    if (process.env.NODE_ENV !== "production") {
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer as any, initialState as any, middleware) as Store<
        any
    >;

    if (module.hot) {
        module.hot.accept("app/reducers", () => {
            const nextReducer = require("app/reducers");
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}