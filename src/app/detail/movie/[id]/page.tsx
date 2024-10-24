import { Metadata } from "next";

import { MovieDetail } from "@/features/detail/components/movie-detail";

export const metadata: Metadata = {
  title: "MEDIA SEARCH | PELÍCULA",
};

interface DetailMoviePageProps {
  params: {
    id: string;
  };
}

export default function DetailMoviePage({ params }: DetailMoviePageProps) {
  const { id } = params;

  return (
    <main>
      <MovieDetail id={id} />
    </main>
  );
}
