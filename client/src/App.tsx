import React from "react";
import NavBar from "./components/navComponent";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

{
    /* import { useSelector } from "react-redux"; */
}
{
    /* import { Switch, Route, useLocation } from "react-router-dom"; */
}
{
    /* import { useTransition, useSpring, animated } from "react-spring"; */
}
{
    /* import styled from "styled-components"; */
}

const App: React.FC = () => {
    return (
        <>
            <GlobalStyles />

            <NavBar />
            <Home />
            <h1>kasdhjfjkds</h1>
        </>
    );
};

export default App;
