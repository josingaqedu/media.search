/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";

import { useDetailTv } from "@/features/detail/api/use-detail-tv";

import { Card, CardBody, CardHeader, Chip, Image } from "@nextui-org/react";

import "@github/relative-time-element";

import { PlayIcon, StarIcon } from "lucide-react";

interface MediaDetailProps {
  id: string;
}

export const TvDetail = ({ id }: MediaDetailProps) => {
  const { mutate, data: tv, isPending } = useDetailTv();

  useEffect(() => {
    mutate({ json: { id } });
  }, [mutate, id]);

  if (isPending) return <div>Loading...</div>;

  return (
    <section
      className="bg-cover bg-center backdrop-blur-lg" // h-[calc(100dvh_-_12rem)] md:h-[calc(100dvh_-_9.5rem)]
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${tv?.backdrop_path})`,
      }}
    >
      <div className="bg-black bg-opacity-50 dark:bg-opacity-70">
        <div className="max-w-screen-xl mx-auto px-6 py-2">
          <Card className="w-full p-4 bg-white/50 dark:bg-black/50 text-black dark:text-white">
            <CardHeader className="flex justify-center">
              <h1 className="text-2xl font-bold uppercase">
                {tv?.name} ({tv?.first_air_date?.split("-")[0]})
              </h1>
            </CardHeader>
            <CardBody className="space-y-4">
              <div className="flex justify-start items-center space-x-2 py-2">
                <Chip>
                  <img src="/TMDB.svg" alt="TMDB" className="w-20" />
                </Chip>
                <StarIcon
                  size={20}
                  strokeWidth="3px"
                  className="text-warning"
                />
                <span className="text-base font-semibold">
                  {tv?.vote_average}
                </span>
              </div>

              <div className="space-y-2">
                <h1 className="text-xl font-semibold uppercase">Resumen</h1>
                <p className="text-lg">{tv?.overview}</p>
              </div>

              {tv?.videos?.results && tv.videos.results.length > 0 && (
                <div className="space-y-2">
                  <h1 className="text-xl font-semibold uppercase">Videos</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {tv?.videos?.results?.map((video) => {
                      if (
                        video.site == "YouTube" &&
                        (video.type == "Trailer" || video.type == "Teaser")
                      ) {
                        return (
                          <div key={video.id}>
                            <div className="relative">
                              <Card
                                isPressable={true}
                                onPress={() => console.log("item pressed")}
                                onClick={() => console.log("item clicked")}
                              >
                                <Image
                                  src={`https://img.youtube.com/vi/${video.key}/maxresdefault.jpg`}
                                  alt={video.name}
                                  className="w-full aspect-video object-cover"
                                />
                                <PlayIcon className="absolute size-12 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white opacity-80 z-10" />
                              </Card>
                            </div>

                            <div className="py-4">
                              <h2 className="font-semibold text-sm mb-2">
                                {video.name}
                              </h2>
                              <div className="flex justify-between items-center text-xs text-muted-foreground">
                                <span>{video.site}</span>
                                <relative-time
                                  datetime={video.published_at}
                                  format="datetime"
                                >
                                  {video.published_at}
                                </relative-time>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              )}
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

/*
<iframe
  title={video.name}
  src={`https://www.youtube.com/embed/${video.key}`}
  allowFullScreen={true}
/>
*/
