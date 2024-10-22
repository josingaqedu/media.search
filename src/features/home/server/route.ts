import { Hono } from "hono";
import { env } from "hono/adapter";

import { Movie } from "@/types";

type ENV = {
  API_URL: string;
  TMDB_TOKEN: string;
};

export const movies = new Hono().get("/discover", async (c) => {
  const { API_URL, TMDB_TOKEN } = env<ENV>(c);

  const OPTIONS = {
    headers: {
      Authorization: `Bearer ${TMDB_TOKEN}`,
    },
  };

  const URL = `${API_URL}/3/discover/movie?language=es-MX&page=1`;

  const response = await fetch(URL, OPTIONS);

  const data = await response.json();

  const movies: Movie[] = data.results;

  return c.json(movies);
});
