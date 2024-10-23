"use client";

import { Suspense } from "react";

import { MediaResult } from "@/features/search/components/media-result";
import { ListMediaCardSkeleton } from "@/components/list-media-card-skeleton";

export const ListMediaResult = () => {
  return (
    <Suspense fallback={<ListMediaCardSkeleton />}>
      <MediaResult />
    </Suspense>
  );
};
