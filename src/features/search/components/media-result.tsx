"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import { useSearchMulti } from "@/features/search/api/use-search-multi";

import { SearchNotFound } from "@/features/search/components/search-not-found";
import { MediaCard } from "@/features/search/components/media-card";

import { ListMediaCardSkeleton } from "@/components/list-media-card-skeleton";

export const MediaResult = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { mutate, data, isPending } = useSearchMulti();

  useEffect(() => {
    mutate({ json: { query } });
  }, [mutate, query]);

  if (!query) return <SearchNotFound />;

  if (isPending) return <ListMediaCardSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {data?.map((item) => (
        <MediaCard key={item.id} data={item} />
      ))}
    </div>
  );
};