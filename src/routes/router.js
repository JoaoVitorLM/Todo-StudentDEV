import React from "react";
import {Route, Routes } from "react-router-dom";
import Todo from "../pages/todo";
import Signin from "../pages/login";
import Signup from "../pages/register";
import useAuth from "../hooks/useAuth";

const Private = ({Item}) => {
    const { signed } = useAuth();

    return signed > 0 ? <Item /> : <Signin />;
}

export default function Rotas() {
    return(
        <>
            <Routes>
                <Route exact path="/todo" element={<Private Item={Todo}/>}/>
                <Route path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </>
    )
} 