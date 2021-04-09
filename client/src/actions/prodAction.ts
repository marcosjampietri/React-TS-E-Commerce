import axios from "axios";
import { getProdActionCreator } from "../types/types";

export const prodAction: getProdActionCreator<any> = () => async (
    dispatch,
    getState
) => {
    dispatch({
        type: "LOADING",
    });

    const url =
        process.env["NODE_ENV"] === "development"
            ? "http://localhost:5000"
            : "";
    const prodUrl = () => `${url}/api/products`;
    const allProd = await axios.get(prodUrl());

    dispatch({
        type: "GET_PROD",
        payload: { products: allProd.data },
    });
};
