import { combineReducers } from "redux";
import { prodReducer } from "./prodReducer";

const rootReducer = combineReducers({
    prod: prodReducer,
});

export default rootReducer;
