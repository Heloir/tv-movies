"use client";

import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  
  &::after{
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: #00000083;
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 680px;
  margin-top: 60px;
  position: relative;
  cursor: grabbing;

  @media (min-width: 1600px) {
    height: 80vh;
  }

  @media (max-width: 800px) {
    height: 100%;
  }
`;

export const PageDetailsHeader = styled.div`
    position: relative;
  
  &::after{
    position: absolute;
    z-index: 2;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: #00000083;
    box-shadow: inset 0px -300px 200px 0px #000000;
  }
`

export const FilmTexts = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  color: white;
  position: absolute;
  bottom: 100px;
  max-width: 900px;
  margin-left: 30px;
  text-align: left;
  font-family: "arial";
  z-index: 5;
`;

export const FilmTitle = styled.h1`
  font-weight: bold;
  font-size: 35px;
`;

export const FilmDecription = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const MoreButton = styled.button`
  padding: 10px;
  width: 150px;
  background-color: transparent;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border-color: orange;
  transition: 0.5s;
  cursor: pointer;

  &:hover{
  background-color: orange;
  }
`;
