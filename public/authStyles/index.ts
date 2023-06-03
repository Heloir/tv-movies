import styled from "styled-components";

//  background-color: rgb(130 87 229);

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: white;
`;

export const AuthForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 500px;
  height: 600px;
  --tw-bg-opacity: 1;
  background-color: #202024;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  height: 40px;
  width: 250px;
  padding-left: 10px;
  font-size: 15px;
`;

export const LoginText = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  
  @media (max-width: 388px) {
    flex-direction: column;
  }
`;
