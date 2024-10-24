import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { detailSchema } from "@/features/detail/zod-schemas";

import { ResultSearch } from "@/types";

const { API_URL, TMDB_TOKEN } = process.env;

const OPTIONS = {
  headers: {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  },
};

export const detail = new Hono()
  .post("/movie", zValidator("json", detailSchema), async (c) => {
    const { id } = c.req.valid("json");

    const URL = `${API_URL}/3/movie/${id}?language=es-MX&append_to_response=videos`;

    const response = await fetch(URL, OPTIONS);

    const movie: ResultSearch = await response.json();

    return c.json(movie);
  })
  .post("/tv", zValidator("json", detailSchema), async (c) => {
    const { id } = c.req.valid("json");

    const URL = `${API_URL}/3/tv/${id}?language=es-MX&append_to_response=videos`;

    const response = await fetch(URL, OPTIONS);

    const tv: ResultSearch = await response.json();

    return c.json(tv);
  });
