import { Hono } from "hono";

import { Movie, Tv } from "@/types";

const { API_URL, TMDB_TOKEN } = process.env;

const OPTIONS = {
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

export const discover = new Hono()
  .get("/movie", async (c) => {
    const URL = `${API_URL}/3/trending/movie/day?language=es-MX`;

    const response = await fetch(URL, OPTIONS);

    const { results } = await response.json();

    const movies: Movie[] = results;

    return c.json(movies);
  })
  .get("/tv", async (c) => {
    const URL = `${API_URL}/3/trending/tv/day?language=es-MX`;

    const response = await fetch(URL, OPTIONS);

    const { results } = await response.json();

    const tv: Tv[] = results;

    return c.json(tv);
  });
