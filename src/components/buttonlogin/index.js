import React from "react";
import { ButtonLogin } from "./styles";

export default function Button({ Text, onClick, Type = "button" }) {
    return(
        <>
            <ButtonLogin type={Type} onClick={onClick}>
                {Text}
            </ButtonLogin>
        </>
    )
}