import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";

interface Props {
    isLoading: boolean;
}

const niceComp: React.FC<Props> = () => {
    return (
        <>
            <Container>
                <div>akhjsh</div>
                <div>akhjsh</div>
            </Container>
        </>
    );
};

export default niceComp;

const Container = styled(animated.div)`
    display: flex;
`;
