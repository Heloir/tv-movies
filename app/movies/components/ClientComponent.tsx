"use client";

import useAuth from "./Auth";
import { NavBar, NavLogo } from "@/public/MainStyles/Nav";
import { Container } from "@/public/MainStyles/global";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FilmsContainer, MoviesImage } from "@/public/MainStyles/Header";

interface IFilms {
  carouselImages?: String[];
  popularFilms?: String;
  ratedMovies?: String;
  trendingSeries?: String;
}

const AuthWrapper = ({ children }) => {
  useAuth();

  return <>{children}</>;
};

export default function FilmsContent(props: IFilms) {
  return (
    <AuthWrapper>
      <NavBar style={{ zIndex: 999 }}>
        <Container>
          <NavLogo>TvFilms</NavLogo>
        </Container>
      </NavBar>
      {
        // @ts-ignore
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={100}
          showStatus={false}
          dynamicHeight={true}
        >
          {props.carouselImages}
        </Carousel>
      }
      <Container>
        <FilmsContainer>
          <div style={{ color: "white", fontFamily: "arial" }}>
            <h1>Filmes Mais Populares</h1>
          </div>
          <MoviesImage className="MoviesCarousel">{props.popularFilms}</MoviesImage>
        </FilmsContainer>

        <FilmsContainer>
          <div style={{ color: "white", fontFamily: "arial"}}>
            <h1>Filmes Bem Classificados</h1>
          </div>
          <MoviesImage className="MoviesCarousel">{props.ratedMovies}</MoviesImage>
        </FilmsContainer>
      </Container>
    </AuthWrapper>
  );
}
