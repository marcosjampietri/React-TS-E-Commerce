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
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                products.map(
                    (item) =>
                        item && (
                            <Card key={item._id}>
                                <Row>
                                    <h6>ITEM</h6>
                                    <h4>{item.title}</h4>
                                </Row>
                                <Row>
                                    <h6>What it is?</h6>
                                    <h4>{item.description}</h4>
                                </Row>
                                <Row>
                                    <h6>£</h6>
                                    <h4>{item.price}</h4>
                                </Row>
                                <Row>
                                    <h6></h6>
                                    <h4>{item.image}</h4>
                                </Row>
                                <input form="" />
                            </Card>
                        )
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
    width: 500px;
    background-image: linear-gradient(
        hsla(0, 90%, 50%, 1),
        hsla(38, 80%, 50%, 0.91)
    );
    input {
        width: 100%:
    }
`;
const Row = styled(animated.div)`
    display: flex;
    align-items: flex-end;

    h6 {
        width: 100px;
    }
`;
