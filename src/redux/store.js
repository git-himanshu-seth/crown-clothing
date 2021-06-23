import { createStore, applyMiddleware } from "redux";

import { persistStore } from "redux-persist";

import logger from "redux-logger";
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleware));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export { store, persistor };
