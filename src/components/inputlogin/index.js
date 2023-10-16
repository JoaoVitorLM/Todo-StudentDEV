import React from "react";
import { InputButton } from "./styles";

export default function Input({ type, placeholder, value, onChange }) {
    return(
        <>
         <InputButton
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
         />
        </>
    )
}
  