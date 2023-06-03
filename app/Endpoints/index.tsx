import axios from "axios";
import { FetchData } from "./component";

export const api = axios.create({
  baseURL: "http://api.themoviedb.org/3/",
});

export class MovieApi {
  static getPopularFilms = FetchData(`movie/popular?language=pt-BR`);
  static getRatedMovies = FetchData(`movie/top_rated?language=pt-BR&page=1`);
  static getHeaderImages = FetchData(`trending/movie/day?language=pt-BR`);

  static getMoviesDetails = async (slug: string) => {
    return await FetchData(`movie/${slug}?language=pt-BR`);
  };
}
