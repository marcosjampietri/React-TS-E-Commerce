import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated } from "react-spring";
import { Dispatch } from "redux";
import styled from "styled-components";
import { prodAction } from "../actions/prodAction";
import { AppState } from "../index";

const Home = () => {
    const dispatch: Dispatch<any> = useDispatch();

    React.useEffect(() => {
        dispatch(prodAction());
    }, []);

    const { isLoading, products } = useSelector(
        (state: AppState) => state.prod
    );

    //Page
    return (
        <Page>
            <h1>HOMEEEE</h1>
            {!isLoading &&
                products.map(
                    (item) =>
                        item && (
                            <Card key={item._id}>
                                <h6>Product</h6>
                                <h2>{item.title}</h2>
                                <input form="" />
                            </Card>
                        )
                )}
        </Page>
    );
};

export default Home;

//style------------------------------------------------------------------

const Page = styled(animated.div)`
    width: 100%;
    color: hsla(327, 100%, 19%, 1);
`;
const Card = styled(animated.div)`
    border: solid 2px hsla(171, 100%, 50%, 1);
    width: 200px;
    background-image: linear-gradient(
        hsla(0, 90%, 50%, 1),
        hsla(38, 80%, 50%, 0.91)
    );
    input {
        width: 100%:
    }
`;
