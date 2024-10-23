"use client";

import { useDiscoverTv } from "@/features/home/api/use-discover-tv";

import { ListMediaCardSkeleton } from "@/components/list-media-card-skeleton";
import { TvShowCard } from "@/features/home/components/tv-show-card";

export const ListTvShows = () => {
  const { data: tvShows, isLoading } = useDiscoverTv();

  if (isLoading) return <ListMediaCardSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {tvShows?.map((tv) => (
        <TvShowCard key={tv.id} data={tv} />
      ))}
    </div>
  );
};
