import { ThunkAction } from "redux-thunk";
import { storeType, allActions } from "./types";

export type actionType = ThunkAction<void, storeType, {}, allActions>;
