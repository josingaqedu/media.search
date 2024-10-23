import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { searchSchema } from "@/features/search/zod-schemas";

import { ResultSearch, Movie, Tv } from "@/types";

const { API_URL, TMDB_TOKEN } = process.env;

const OPTIONS = {
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

export const search = new Hono()
  .post("/multi", zValidator("json", searchSchema), async (c) => {
    const { query } = c.req.valid("json");

    const URL = `${API_URL}/3/search/multi?query=${query}&language=es-MX&page=1`;

    const response = await fetch(URL, OPTIONS);

    const data = await response.json();

    const movies: ResultSearch[] = data.results;

    const filteredMovies = movies.filter(
      (item) => item.media_type === "movie" || item.media_type === "tv"
    );
    
    const resultMovies = filteredMovies.filter((item) => item.poster_path);

    return c.json(resultMovies);
  })
  .get("/movie", async (c) => {
    const URL = `${API_URL}/3/trending/movie/day?language=es-MX`;

    const response = await fetch(URL, OPTIONS);

    const data = await response.json();

    const tv: Movie[] = data.results;

    return c.json(tv);
  })
  .get("/tv", async (c) => {
    const URL = `${API_URL}/3/trending/tv/day?language=es-MX`;

    const response = await fetch(URL, OPTIONS);

    const data = await response.json();

    const tv: Tv[] = data.results;

    return c.json(tv);
  });
