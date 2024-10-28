import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { detailSchema, providerSchema } from "@/features/detail/zod-schemas";

import { ResultSearch, Country } from "@/types";

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
  .post("/movie/providers", zValidator("json", providerSchema), async (c) => {
    const { id } = c.req.valid("json");

    const URL = `${API_URL}/3/movie/${id}/watch/providers`;

    const response = await fetch(URL, OPTIONS);

    const { results } = await response.json();

    const providers: Country[] = Object.entries(results).map(([key, value]) => {
      if (typeof value === "object" && value !== null) {
        return {
          name: key,
          ...value,
        };
      } else {
        return { name: key };
      }
    });

    return c.json(providers);
  })
  .post("/tv", zValidator("json", detailSchema), async (c) => {
    const { id } = c.req.valid("json");

    const URL = `${API_URL}/3/tv/${id}?language=es-MX&append_to_response=videos`;

    const response = await fetch(URL, OPTIONS);

    const tv: ResultSearch = await response.json();

    return c.json(tv);
  })
  .post("/tv/providers", zValidator("json", providerSchema), async (c) => {
    const { id } = c.req.valid("json");

    const URL = `${API_URL}/3/tv/${id}/watch/providers`;

    const response = await fetch(URL, OPTIONS);

    const tv: ResultSearch = await response.json();

    return c.json(tv);
  });
