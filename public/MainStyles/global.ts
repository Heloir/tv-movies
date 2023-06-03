import styled from "styled-components";

export const Container = styled.div`
  margin-left: 2%;
  margin-right: 2%;
`;

export const Button = styled.button`
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'orange')};
  width: 170px;
  height: 40px;
  cursor: pointer;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  border: none;
  transition: 0.5s;
`;
