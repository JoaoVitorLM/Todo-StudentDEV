import React from "react";
import { BoxMain, BoxRegister, Container, P, TitleBox } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Input from "../../components/inputlogin";
import Button from "../../components/buttonlogin";


export default function Signin() {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/todo");
  };

    return(
        <>
            <BoxMain>
                <Container>
                    <TitleBox>Login</TitleBox>
                    <BoxRegister>
                    <P>Email</P>
                    <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <P>Password</P>
                    <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <Link to="/signup">
                        <p>Criar conta</p>
                    </Link >
                    <Button Text="Entrar" onClick={handleLogin} />
                    </BoxRegister>
                </Container>
            </BoxMain>
        </>
    )
}