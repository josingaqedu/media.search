import { Metadata } from "next";

import { TvDetail } from "@/features/detail/components/tv-detail";

export const metadata: Metadata = {
  title: "MEDIA SEARCH | SERIE",
};

interface DetailTvPageProps {
  params: {
    id: string;
  };
}

export default function DetailTvPage({ params }: DetailTvPageProps) {
  const { id } = params;

  return (
    <main>
      <TvDetail id={id} />
    </main>
  );
}
