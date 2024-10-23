import { Metadata } from "next";
import { ListMediaResult } from "@/features/search/components/list-media-result";

export const metadata: Metadata = {
  title: "MEDIA SEARCH | RESULTADOS",
};

export default function SearchPage() {
  return (
    <main className="max-w-screen-xl mx-auto px-6 py-2 space-y-2">
      <ListMediaResult />
    </main>
  );
}
