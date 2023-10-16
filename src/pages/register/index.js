
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/buttonlogin";
import Input from "../../components/inputlogin";
import { BoxMain, BoxRegister, Container, P,  TitleBox } from "./styles";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Signup() {

    const [email, setEmail] = useState("");
    const [emailConf, setEmailConf] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const { signup } = useAuth();
  
    const handleSignup = () => {
      if (!email | !emailConf | !senha) {
        setError("Preencha todos os campos");
        return;
      } else if (email !== emailConf) {
        setError("Os e-mails não são iguais");
        return;
      }
  
      const res = signup(email, senha);
  
      if (res) {
        setError(res);
        return;
      }
  
      alert("Usuário cadatrado com sucesso!");
      navigate("/");
    };
  

    return(
        <>
            <BoxMain>
                <Container>
                    <TitleBox>Create account</TitleBox>
                    <BoxRegister>
                    <P>Email</P>
                    <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                    <P>Confirme seu Email</P>
                    <Input
                    type="email"
                    placeholder="Confirme seu E-mail"
                    value={emailConf}
                    onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                    />
                    <P>Password</P>
                    <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                    <Link to="/">
                        <p>Entre</p>
                    </Link>
                    <Button Text="Inscrever-se" onClick={handleSignup} />
                    </BoxRegister>
                </Container>
            </BoxMain>
        </>
    )
}