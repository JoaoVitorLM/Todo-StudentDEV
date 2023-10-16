import React from "react";
import {A, BoxGear, BoxIten, BoxItens, Iten, P, VerticalBar } from "./styles";
import { BiLogOutCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BiLogoJavascript, BiLogoJava } from "react-icons/bi";
import { AiOutlineMobile } from "react-icons/ai";


export default function ColumnBar() {
    return(
        <>
            <VerticalBar>
                <BoxItens>
                    <Iten>
                        <A href="https://roadmap.sh/frontend">
                        <BiLogoJavascript size={35} color="white"/>                      
                        </A>
                        <P>Front-end</P>
                    </Iten>
                    <Iten>
                        <A href="https://roadmap.sh/backend">
                        <BiLogoJava size={40} color="white"/>
                        </A>
                        <P>Back-end</P>
                    </Iten>
                    <Iten>
                        <A href="https://roadmap.sh/android">
                        <AiOutlineMobile size={35} color="white"/>
                        </A>
                        <P>Android</P>
                    </Iten>
                </BoxItens>
                <BoxGear>
                    <Link to="/login">                    
                    <BiLogOutCircle size={30} color="white"/>
                    </Link>
                </BoxGear>

            </VerticalBar>
        </>
    )
}