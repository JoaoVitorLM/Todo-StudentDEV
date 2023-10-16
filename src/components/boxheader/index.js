import React from "react";
import { BoxHeader, ContainerHeader, H1, ImgUser, Span } from "./styles";



export default function Header() {


    return(
        <>
          <BoxHeader>
              <ContainerHeader>
              <div>
                <H1>Student-<Span>DEV</Span></H1>
              </div>
              <ImgUser/>
              </ContainerHeader>
            </BoxHeader>
        </>
    )
}