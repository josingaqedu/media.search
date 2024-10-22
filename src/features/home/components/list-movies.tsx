"use client";

import { useDiscoverMovie } from "@/features/home/api/use-discover-movie";

import { ListMediaCardSkeleton } from "@/features/home/components/list-media-card-skeleton";
import { MovieCard } from "@/features/home/components/movie-card";

export const ListMovies = () => {
  const { data: movies, isLoading } = useDiscoverMovie();

  if (isLoading) return <ListMediaCardSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} data={movie} />
      ))}
    </div>
  );
};
