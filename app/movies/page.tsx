import axios from "axios";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FilmsContent from "./components/ClientComponent";
import { Key } from "react";
import {
  FilmDecription,
  FilmTexts,
  FilmTitle,
  HeaderContainer,
  MoreButton,
  Header,
} from "./styles/globalStyles";
import Movie from "./components/MoviesComponent";
import Link from "next/link";
import { MovieApi } from "../Endpoints";

export interface IMoviesMaps {
  backdrop_path?: String;
  poster_path: String;
  id: Key;
  title?: String;
  overview?: String;
}

export default async function FilmsPage() {
  const [popularFilms, headerImages, ratedMovies] =
    await Promise.all([
      MovieApi.getPopularFilms,
      MovieApi.getHeaderImages,
      MovieApi.getRatedMovies,
    ]);

  return (
    <FilmsContent
      carouselImages={headerImages.results.slice(0, 5).map((movie: IMoviesMaps) => {
        return (
          <Header key={movie.id}>
            <HeaderContainer>
              <Image
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "100%" }}
                loading="lazy"
              />
            </HeaderContainer>
            <FilmTexts key={movie.id}>
              <FilmTitle>{movie.title}</FilmTitle>
              <FilmDecription>{movie.overview}</FilmDecription>
              <Link href={`/details/${movie.id}`}>
                <MoreButton>SAIBA MAIS</MoreButton>
              </Link>
            </FilmTexts>
          </Header>
        );
      })}
      popularFilms={popularFilms.results.map((movie: IMoviesMaps) => {
        return (
          <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} />
        );
      })}
      ratedMovies={ratedMovies.results.map((movie: IMoviesMaps) => {
        return (
          <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} />
        );
      })}
    />
  );
}
