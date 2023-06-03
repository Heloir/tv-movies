import axios from "axios";
import Actor from "../components/ActorsComponente";
import MovieDecription from "../components/MovieDecription";
import { MovieApi } from "@/app/Endpoints";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

interface IMovie {
  id: number;
  slug: string;
}

interface Props {
  params: IMovie;
}

async function getMoviesCredits(slug: string) {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${slug}/credits?language=pt-BR`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );

  const reducedData = data.cast.slice(0, 15);

  return reducedData;
}

//

export async function generateStaticParams() {
  const posts = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  ).then((res) => res.json());

  return posts.results.map((post: IMovie) => ({
    slug: post.id.toString(),
  }));
}

export default async function Page({ params }: Props) {
  const movie = await MovieApi.getMoviesDetails(params.slug);
  const movieCredits = await getMoviesCredits(params.slug);

  return (
    <MovieDecription
      title={movie.title}
      backdrop_path={movie.backdrop_path}
      overview={movie.overview}
      actorsImages={movieCredits
        .filter((actorimage: Params) => actorimage.profile_path !== null)
        .map((actorProfile: Params) => {
          return (
            <Actor
              key={actorProfile.id}
              id={actorProfile.id}
              poster_path={actorProfile.profile_path}
              name={actorProfile.name}
            />
          );
        })}
    />
  );
}
