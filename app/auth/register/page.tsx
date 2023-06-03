"use client";

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
import { FormEvent, useMemo, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

import api from "@/app/api";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [inputErrors, setInputErros] = useState('')
  const [sending, setSend] = useState(false);

  const buttonState = useMemo(() => {
    return !inputValue.email.length || !inputValue.password.length || sending;
  }, [inputValue.email.length, inputValue.password.length, sending]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    setSend(true);

    try {
      const response = await api.post(
        "/auth/register",
        inputValue
      );
      if (response.status === 200) router.push("/auth/login");
    } catch (error) {
      setInputErros(error.response?.data.msg)
    }
    setSend(false);
  };

  return (
    <Container className={inter.className}>
      <AuthForm onSubmit={onSubmit}>
        <h1>Faça seu Cadrasto</h1>
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

        <Button disabled={buttonState}>Cadastrar</Button>

        <LoginText>
          Já tem uma conta?
          <Link
            href="/auth/login"
            style={{
              color: "orange",
            }}
          >
            Faça seu Login
          </Link>
        </LoginText>
      </AuthForm>
    </Container>
  );
}
