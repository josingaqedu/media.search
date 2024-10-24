import { Hono } from "hono";
import { handle } from "hono/vercel";

import { discover } from "@/features/home/server/route";
import { search } from "@/features/search/server/route";
import { detail } from "@/features/detail/server/route";

export const runtime = "edge";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const routes = app
  .route("/discover", discover)
  .route("/search", search)
  .route("/detail", detail);

export type AppType = typeof routes;

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
