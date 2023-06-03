import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  background-image: url('./images/header-background.jpg');
  background-size: cover;
  box-shadow: inset 0 -300px 300px 10px black;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 60px;
  color: white;
`;

export const FilmsContainer = styled.div`
  margin-top: 40px;
`

export const MoviesImage = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  margin-top: 20px;
`

export const ImageContainer = styled.div`
width: 100%;
position: relative;
cursor: pointer;


@keyframes imageAfter{ 
  from{
    opacity: 0;
  } to {
    opacity: 1;
  }
}


&:hover{
  &::after{
    position: absolute;
    z-index: 1;
    left: 0;
    width: 100%;
    height: 100%;
    animation: forwards imageAfter 0.5s;
    content: '';
    background-color: #000000a7;
    border-radius: 10px; 
  }
  
  .detailsButton{
    display: flex;
  }
}
`

export const DetailsButton = styled.button`
width: 70px;
height: 70px;
cursor: pointer;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color: orange;
color: white;
font-weight: bold;
border: none;
transition: 0.5s;

&:hover{
  background-color: #ff6a00;
}
`