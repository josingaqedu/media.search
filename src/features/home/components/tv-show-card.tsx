/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { StarIcon } from "lucide-react";
import { Tv } from "@/types";

interface MovieCardProps {
  data: Tv;
}

export const TvShowCard = ({ data }: MovieCardProps) => {
  const router = useRouter();

  return (
    <Card
      shadow="sm"
      isPressable={true}
      onPress={() => router.push(`/detail/tv/${data.id}`)}
      onClick={() => router.push(`/detail/tv/${data.id}`)}
    >
      <CardBody className="overflow-visible p-0">
        <img
          width="100%"
          alt={data.original_name}
          className="w-full h-auto sm:h-[468px] md:h-[450px] lg:h-[400px] xl:h-[350px] object-cover rounded-large"
          src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        />
      </CardBody>
      <CardFooter className="text-xs flex-col space-y-2">
        <b>{data.name}</b>
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img width="56px" src="/TMDB.svg" alt="TMDB" />
            <p className="text-default-500">
              {data.first_air_date.split("-")[0]}
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <StarIcon className="text-warning size-[16px]" />
            <p className="text-default-500">{data.vote_average.toFixed(1)}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
