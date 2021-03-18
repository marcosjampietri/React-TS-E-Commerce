import { storeType } from "../types/types";

const initState = {
    isLoading: true,
    products: [],
};

export function prodReducer(
    state: storeType = initState,
    action: any
): storeType {
    switch (action.type) {
        case "GET_PROD":
            return {
                ...state,
                products: action.payload.products,
                isLoading: false,
            };
        default:
            return {
                ...state,
            };
    }
}
