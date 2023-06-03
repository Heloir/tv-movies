"use client";

import useAuth from "@/app/movies/components/Auth";
import {
  FilmDecription,
  FilmTexts,
  FilmTitle,
  Header,
  HeaderContainer,
  MoreButton,
} from "@/app/movies/styles/globalStyles";
import { FilmsContainer, MoviesImage } from "@/public/MainStyles/Header";
import { NavBar, NavLogo } from "@/public/MainStyles/Nav";
import { Container } from "@/public/MainStyles/global";
import Image from "next/image";
import { ActorsDetailsComponent } from "./ActorsDetailsComponente";

interface IMovieDetails {
  id?: String;
  title: String;
  overview: String;
  backdrop_path: String;
  actorsImages?: any;
}

const AuthWrapper = ({ children }) => {
  useAuth();

  return <>{children}</>;
};

export default function MoviesDetailsComponent(props: IMovieDetails) {
  return (
    <AuthWrapper>
      <NavBar style={{ zIndex: 999 }}>
        <Container>
          <NavLogo>TvFilms</NavLogo>
        </Container>
      </NavBar>

      <Header>
        <HeaderContainer>
          <Image
            src={`https://image.tmdb.org/t/p/w1280${props.backdrop_path}`}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            loading="lazy"
          />
        </HeaderContainer>
        <FilmTexts>
          <FilmTitle>{props.title}</FilmTitle>
          <FilmDecription>{props.overview}</FilmDecription>
          <MoreButton>SABER MAIS</MoreButton>
        </FilmTexts>
      </Header>

      <Container>
        <FilmsContainer>
          <div style={{ color: "white", fontFamily: "arial" }}>
            <h1>Atores</h1>
          </div>
          <ActorsDetailsComponent>{props.actorsImages}</ActorsDetailsComponent>
        </FilmsContainer>  
      </Container>

    </AuthWrapper>
  );
}
