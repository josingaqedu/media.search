import { Hono } from "hono";
import { env } from "hono/adapter";

import { Movie, Tv } from "@/types";

type ENV = {
  API_URL: string;
  TMDB_TOKEN: string;
};

export const discover = new Hono()
  .get("/movie", async (c) => {
    const { API_URL, TMDB_TOKEN } = env<ENV>(c);

    const OPTIONS = {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    };

    const URL = `${API_URL}/3/trending/movie/day?language=es-MX`;

    const response = await fetch(URL, OPTIONS);

    const data = await response.json();

    const movies: Movie[] = data.results;

    return c.json(movies);
  })
  .get("/tv", async (c) => {
    const { API_URL, TMDB_TOKEN } = env<ENV>(c);

    const OPTIONS = {
      headers: {
        Authorization: `Bearer ${TMDB_TOKEN}`,
      },
    };

    const URL = `${API_URL}/3/trending/tv/day?language=es-MX`;

    const response = await fetch(URL, OPTIONS);

    const data = await response.json();

    const tv: Tv[] = data.results;

    return c.json(tv);
  });
