import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

interface Props {
    // isLoading: boolean;
}

// const { isLoading, products } = useSelector((state: AppState) => state.prod);

const NavBar: React.FC<Props> = () => {
    return (
        <Container>
            <div>akhjsh</div>
            <div>akhjsh</div>
        </Container>
    );
};

export default NavBar;

const Container = styled(animated.div)`
    display: flex;
    height: 120px;
    // width: 120px;
    background-image: linear-gradient(
        hsla(40, 100%, 50%, 1),
        hsla(216, 100%, 50%, 1)
    );
    border: groove 3px hsla(28, 100%, 50%, 1);
    color: hsla(360, 96%, 37%, 1);
    border-radius: 5%;
    filter: blur(50px;);
`;
