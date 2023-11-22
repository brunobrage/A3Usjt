import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function Login() {

  const { switchToSignup } = useContext(AccountContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  const themeInput = () => {
    return Swal.fire({
      title: "Insira o tema que deseja.",
      input: "text",
      inputAttributes: {
        autocapitalize: "Cancelar"
      },
      showCancelButton: true,
      confirmButtonText: "Enviar",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          navigate(`/texto/${login}`)
          return Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tema inserido com sucesso, aguarde!",
            showConfirmButton: false,
            timer: 1500
          });
        } catch (error) {
          Swal.showValidationMessage(`
            Erro ao inserir o Tema: ${error}
          `);
        }
      },
    })
  }

  function errorEmail() {
    return Swal.fire("E-mail ou senha inválido, tente novamente.");
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <Input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Esqueceu a senha?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      { email === "Administrador" && password === "admin" ? 
      (
        <SubmitButton as={Link} onClick={themeInput}>
        Signin
        </SubmitButton>
      ):
      (
        <SubmitButton as={Link} onClick={errorEmail}>
          Signin
        </SubmitButton>
      )}
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Você não tem uma conta?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}