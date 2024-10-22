/* eslint-disable @next/next/no-img-element */
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { StarIcon } from "lucide-react";
import { Movie } from "@/types";

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <Card shadow="sm" isPressable={true} onClick={() => console.log(movie)}>
      <CardBody className="overflow-visible p-0">
        <img
          width="100%"
          alt={movie.original_title}
          className="w-full h-auto sm:h-[468px] md:h-[450px] lg:h-[400px] xl:h-[350px] object-cover rounded-large"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
      </CardBody>
      <CardFooter className="text-xs flex-col space-y-2">
        <b>{movie.title}</b>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img width="56px" src="/TMDB.svg" alt="TMDB" />
            <p className="text-default-500">
              {movie.release_date.split("-")[0]}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <StarIcon className="text-warning size-[16px]" />
            <p className="text-default-500">{movie.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
