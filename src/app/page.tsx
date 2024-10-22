import { Metadata } from "next";
import { ListMovies } from "@/features/home/components/list-movies";
import { ListTvShows } from "@/features/home/components/list-tv-shows";

export const metadata: Metadata = {
  title: "MEDIA SEARCH | INICIO",
};

export default function HomePage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-2 space-y-2">
      <ListMovies />
      <ListTvShows />
    </main>
  );
}
