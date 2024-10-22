"use client";

import { useFetchMovies } from "@/features/home/api/use-sign-in";

import { ListMoviesCardSkeleton } from "@/features/home/components/list-movies-card-skeleton";
import { MovieCard } from "@/features/home/components/movie-card";

export const ListMoviesCard = () => {
  const { data: movies, isLoading } = useFetchMovies();

  if (isLoading) return <ListMoviesCardSkeleton />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
