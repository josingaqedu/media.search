import { MediaCardSkeleton } from "@/components/media-card-skeleton";

export const ListMediaCardSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
      {Array.from({ length: 20 }).map((_, index) => (
        <MediaCardSkeleton key={index} />
      ))}
    </div>
  );
};
