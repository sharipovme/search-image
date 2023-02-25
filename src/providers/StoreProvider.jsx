import PropTypes from "prop-types";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import rootReducer from "../store/reducers/index";
import rootSaga from "../store/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

StoreProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
