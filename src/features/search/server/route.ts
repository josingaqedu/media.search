import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { searchSchema } from "@/features/search/zod-schemas";

import { ResultSearch } from "@/types";

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

    const { results } = await response.json();

    const data: ResultSearch[] = results;

    const filteredData = data.filter(
      (item) => item.media_type === "movie" || item.media_type === "tv"
    );

    const searchData = filteredData.filter((item) => item.poster_path);

    return c.json(searchData);
  })
  .get("/movie", async (c) => {
    return c.json([]);
  })
  .get("/tv", async (c) => {
    return c.json([]);
  });
