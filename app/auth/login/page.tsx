"use client";

import api from "@/app/api";
import { Button } from "@/public/MainStyles/global";
import {
  AuthForm,
  Container,
  Input,
  InputsContainer,
  LoginText,
} from "@/public/authStyles";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useMemo, useState } from "react";
import Cookies from "js-cookie";

const inter = Inter({ subsets: ["latin"] });

export default function Page() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const [inputErrors, setInputErros] = useState('')
  const [sending, setSend] = useState(false);

  const router = useRouter();

  const buttonState = useMemo(() => {
    return !inputValue.email.length || !inputValue.password.length || sending;
  }, [inputValue.email.length, inputValue.password.length, sending]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSend(true);

    try {
       
      const response = await api.post('/auth/login', {
        email: inputValue.email,
        password: inputValue.password,
      });

      const { token }  = response.data;


      Cookies.set('jwtToken', token, {
        expires: 1,
        path: '/',
        secure: true, 
        sameSite: 'strict',
      });

      if (response.status === 200) router.push('/movies')
    } catch (error) {
      setInputErros(error.response?.data.msg)
    }
    setSend(false);
  };

  return (
    <Container className={inter.className}>
      <AuthForm onSubmit={onSubmit}>
        <h1>Faça seu Login</h1>
        <InputsContainer>
          <Input
            placeholder="Digite seu email"
            value={inputValue.email}
            onChange={(currentEmail) =>
              setInputValue({
                ...inputValue,
                email: currentEmail.currentTarget.value,
              })
            }
          />
          <Input
            placeholder="Digite sua senha"
            value={inputValue.password}
            type="password"
            onChange={(currentPassword) =>
              setInputValue({
                ...inputValue,
                password: currentPassword.currentTarget.value,
              })
            }
          />
        </InputsContainer>

        <p>{inputErrors}</p>
        
        <Button disabled={buttonState}>Fazer Login</Button>

        <LoginText>
          Ainda não tem uma conta?
          <Link
            href="/auth/register"
            style={{
              color: "orange",
            }}
          >
            Faça seu Cadastro
          </Link>
        </LoginText>
      </AuthForm>
    </Container>
  );
}