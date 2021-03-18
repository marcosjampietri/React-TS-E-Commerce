import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider, TypedUseSelectorHook, useSelector } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const composeEnhancer =
    (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) ||
    compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;
